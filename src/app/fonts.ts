import { Inter, Rock_Salt } from 'next/font/google';
import localFont from 'next/font/local';

export const pretendard = localFont({
  src: '../../assets/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--pretendard',
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--inter-font',
});

export const rock_salt = Rock_Salt({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--rock-font',
});
