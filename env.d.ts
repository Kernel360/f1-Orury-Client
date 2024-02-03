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
      NEXT_PUBLIC_ACCESS_TOKEN: string;
      NEXT_PUBLIC_REFRESH_TOKEN: string;
    }
  }
}

declare module 'axios' {
  export interface AxiosRequestConfig {
    useAuth?: boolean;
  }
}
