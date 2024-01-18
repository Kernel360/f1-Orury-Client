'use client';

import { ReactNode } from 'react';
// import mockEnable from '@/lib/msw/mock-enable';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { CookiesProvider } from 'react-cookie';

// if (process.env.NEXT_PUBLIC_API_MOCKING === 'enable') {
//   mockEnable();
// }

function Providers({ children }: { children: ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <CookiesProvider>{children}</CookiesProvider>
    </AppRouterCacheProvider>
  );
}

export default Providers;
