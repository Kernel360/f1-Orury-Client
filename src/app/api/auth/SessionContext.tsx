'use client';

import { SessionProvider } from 'next-auth/react';

export function SessionContext({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
