export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_URL: string;
      KAKAO_CLIENT_SECRET: string;
      NEXTAUTH_SECRET: string;
      NEXTAUTH_URL: string;
    }
  }
}
