'use client';

import { ReactNode } from 'react';
import mockEnable from '@/lib/msw/mock-enable';
import { SessionContext } from '@/app/api/auth/SessionContext';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enable') {
  mockEnable();
}

function Providers({ children }: { children: ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <SessionContext>{children}</SessionContext>
    </AppRouterCacheProvider>
  );
}

export default Providers;
