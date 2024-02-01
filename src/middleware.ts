import CALLBACK_URL from '@/constants/url';

import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const { cookies } = req;
  const hasCookie = cookies.has('access_token');

  // 사용자가 요청하는 페이지 pathname
  const { pathname } = req.nextUrl;

  if (!hasCookie && pathname !== '/') {
    return NextResponse.redirect(new URL(CALLBACK_URL.home, req.url));
  }

  if (hasCookie && pathname === '/') {
    return NextResponse.redirect(new URL(CALLBACK_URL.service, req.url));
  }

  return NextResponse.next();
}

// 미들웨어가 실행될 특정 pathname을 지정하면, 해당 pathname에서만 실행 가능
export const config = {
  matcher: ['/((?!_next|sign-up|sign-in).*)(.+)', '/kauth.kakao.com/:path*'],
};
