import type { Metadata } from 'next';
import { pretendard } from '@/app/ui/fonts';
import '@/app/styles/globals.css';

export const metadata: Metadata = {
  title: 'Orury',
  description: 'Generated by create next app',
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${pretendard.className} antialiased bg-slate-100`}>
        <div className="max-w-[768px] mx-auto">{children}</div>
      </body>
    </html>
  );
}

export default RootLayout;
