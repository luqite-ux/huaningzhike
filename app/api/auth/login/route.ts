import bcrypt from 'bcryptjs'
import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/server'
import { SESSION_COOKIE, TENANT_COOKIE } from '@/lib/admin-session'
const fail = (request: NextRequest, message: string) => NextResponse.redirect(new URL(`/admin/login?error=${encodeURIComponent(message)}`, request.url), 303)
export async function POST(request: NextRequest) {
  const form = await request.formData(); const email = String(form.get('email') ?? '').trim().toLowerCase(); const password = String(form.get('password') ?? '')
  if (!email || !password) return fail(request, 'Email and password are required.')
  try {
    const supabase = createAdminClient()
    const { data: user } = await supabase.from('admin_users').select('id,password_hash,is_active,tenant_id').eq('email', email).single()
    if (!user?.is_active || user.tenant_id !== process.env.NEXT_PUBLIC_TENANT_ID || !(await bcrypt.compare(password, user.password_hash))) return fail(request, 'Invalid email or password.')
    const token = crypto.randomUUID(); const expires = new Date(Date.now() + 7 * 86400000)
    const { error } = await supabase.from('admin_user_sessions').insert({ admin_user_id: user.id, token, expires_at: expires.toISOString(), ip: request.headers.get('x-forwarded-for'), user_agent: request.headers.get('user-agent') })
    if (error) return fail(request, 'Unable to create a session. Please try again.')
    await supabase.from('admin_users').update({ last_login_at: new Date().toISOString() }).eq('id', user.id)
    const response = NextResponse.redirect(new URL('/admin', request.url), 303)
    const options = { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax' as const, expires, path: '/' }
    response.cookies.set(SESSION_COOKIE, token, options); response.cookies.set(TENANT_COOKIE, user.tenant_id, options)
    return response
  } catch { return fail(request, 'Administration is not configured.') }
}
