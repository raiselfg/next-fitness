import { NextRequest, NextResponse } from 'next/server';

import { getSession } from '@/features/auth/actions/get-session';

import { APP_ROUTES } from './constants';

export default async function proxy(req: NextRequest) {
  const data = await getSession();

  const session = data?.session;

  const isProtectedRoute =
    req.nextUrl.pathname.startsWith(APP_ROUTES.PROFILE) ||
    req.nextUrl.pathname.startsWith(APP_ROUTES.STRATEGY_SETUP);

  const isAuthRoute =
    req.nextUrl.pathname.startsWith(APP_ROUTES.LOGIN) ||
    req.nextUrl.pathname.startsWith(APP_ROUTES.SIGNUP);

  if (isProtectedRoute && !session) {
    const loginUrl = new URL(APP_ROUTES.LOGIN, req.url);

    return NextResponse.redirect(loginUrl);
  }

  if (isAuthRoute && session) {
    const profileUrl = new URL(APP_ROUTES.PROFILE, req.url);

    return NextResponse.redirect(profileUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all req paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
