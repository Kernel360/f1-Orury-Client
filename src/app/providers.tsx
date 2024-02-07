'use client';

import { ReactNode } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { CookiesProvider } from 'react-cookie';

function Providers({ children }: { children: ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <CookiesProvider>{children}</CookiesProvider>
    </AppRouterCacheProvider>
  );
}

export default Providers;
