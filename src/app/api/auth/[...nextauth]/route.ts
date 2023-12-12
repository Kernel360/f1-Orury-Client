/* eslint-disable no-param-reassign */
import NextAuth from 'next-auth/next';
import KakaoProvider from 'next-auth/providers/kakao';

const handler = NextAuth({
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],

  session: { strategy: 'jwt' },

  pages: {
    signIn: '/signin',
  },
});

export { handler as GET, handler as POST };
