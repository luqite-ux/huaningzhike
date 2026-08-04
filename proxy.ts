import { NextRequest, NextResponse } from 'next/server'
import { SESSION_COOKIE } from '@/lib/admin-session'

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl

  if (
    pathname.startsWith('/admin') &&
    pathname !== '/admin/login' &&
    pathname !== '/admin/logout' &&
    !request.cookies.get(SESSION_COOKIE)?.value
  ) {
    const url = request.nextUrl.clone()
    url.pathname = '/admin/login'
    url.searchParams.set('reason', 'unauthorized')
    return NextResponse.redirect(url)
  }

  if (pathname === '/admin/login' || pathname === '/admin/logout') {
    return NextResponse.next()
  }

  const configuredAdminUrl = process.env.NEXT_PUBLIC_ADMIN_URL
    ?.trim()
    .replace(/[\r\n]/g, '')
    .replace(/\/$/, '')

  if (!configuredAdminUrl) {
    return NextResponse.next()
  }

  const adminOrigin = new URL(configuredAdminUrl)
  const destination = new URL(`${pathname}${search}`, adminOrigin)
  const requestHeaders = new Headers(request.headers)

  // The browser legitimately sends the customer-site origin. Once the request
  // crosses this trusted proxy boundary, normalize both sides of Next.js's
  // Server Action CSRF comparison to the actual upstream admin application.
  requestHeaders.set('origin', adminOrigin.origin)
  requestHeaders.set('x-forwarded-host', adminOrigin.host)

  return NextResponse.rewrite(destination, { request: { headers: requestHeaders } })
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}
