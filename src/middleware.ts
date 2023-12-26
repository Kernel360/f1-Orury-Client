import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';
import CALLBACK_URL from '@/constants/url';

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  // 사용자가 요청하는 페이지 pathname
  const { pathname } = req.nextUrl;

  // if (!token && pathname === '/my-page') {
  //   return NextResponse.redirect(new URL('/signin', req.url));
  // }

  if (!token && pathname === CALLBACK_URL.service) {
    return NextResponse.redirect(new URL(CALLBACK_URL.home, req.url));
  }

  return null;
}

// 미들웨어가 실행될 특정 pathname을 지정하면, 해당 pathname에서만 실행 가능
export const config = {
  mathcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
