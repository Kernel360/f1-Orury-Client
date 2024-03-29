import type { Metadata } from 'next';
import '@/styles/globals.css';
import Providers from '@/app/providers';
import { pretendard } from '@/styles/fonts';
import { Toaster } from '@/app/_components/ui/toaster';
import { COLOR } from '@/styles/color';

export const metadata: Metadata = {
  title: 'Orury',
  description: 'Generated by create next app',
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <meta name="msapplication-TileColor" content={COLOR.primary} />
      <meta name="theme-color" content={COLOR.primary} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Orury" />
      <meta name="theme-color" content={COLOR.primary} />

      <meta
        name="viewport"
        content="viewport-fit=cover, width=device-width, initial-scale=1.0"
      />
      <link
        crossOrigin="use-credentials"
        rel="manifest"
        href="/manifest.json"
      />
      <link rel="apple-touch-icon" href="/favicons/apple-icon.png" />

      <link
        href="/favicons/favicon-16x16.png"
        rel="icon"
        type="image/png"
        sizes="16x16"
      />
      <link
        href="/favicons/favicon-32x32.png"
        rel="icon"
        type="image/png"
        sizes="32x32"
      />
      <body className={`${pretendard.className} antialiased bg-slate-100`}>
        <div className="max-w-[768px] mx-auto h-screen pb-safe bg-white">
          <Providers>
            {children}
            <Toaster />
          </Providers>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
