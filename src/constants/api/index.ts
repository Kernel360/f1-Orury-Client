export const DEV = process.env.NODE_ENV === 'development';

export const BACK_URL =
  process.env.NEXT_PUBLIC_API_MOCKING === 'enable'
    ? 'http://localhost:3000'
    : process.env.NEXT_PUBLIC_API_URL;
