export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_URL: string;
      KAKAO_CLIENT_ID: string;
      KAKAO_CLIENT_SECRET: string;
      NEXTAUTH_SECRET: string;
      NEXTAUTH_URL: string;
      NEXT_PUBLIC_KAKAO_APP_KEY: string;
    }
  }
}
