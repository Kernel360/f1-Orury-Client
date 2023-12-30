export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      KAKAO_CLIENT_ID: string;
      KAKAO_CLIENT_SECRET: string;
      NEXTAUTH_SECRET: string;
      NEXTAUTH_URL: string;
      NEXT_PUBLIC_API_URL: string;
      NEXT_PUBLIC_KAKAO_APP_KEY: string;
    }
  }
}
