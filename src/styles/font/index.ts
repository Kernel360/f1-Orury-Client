import { ABeeZee, Inter, Rock_Salt } from 'next/font/google';
import localFont from 'next/font/local';

export const pretendard = localFont({
  src: './PretendardVariable.woff2',
  display: 'swap',
  variable: '--pretendard-font',
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--inter-font',
});

export const rock = Rock_Salt({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--rock-font',
});

export const giants = localFont({
  src: './Giants-Regular.ttf',
  display: 'swap',
  variable: '--giants-font',
});

export const aBeeZee = ABeeZee({
  subsets: ['latin'],
  weight: '400',
});
