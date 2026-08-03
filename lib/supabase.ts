import { createClient } from '@supabase/supabase-js'

export const tenantId = process.env.NEXT_PUBLIC_TENANT_ID?.trim() ?? ''

export function createSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim()
  if (!url || !key || !tenantId) return null
  return createClient(url, key, { auth: { persistSession: false } })
}
