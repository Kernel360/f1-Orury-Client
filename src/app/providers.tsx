import { ReactNode } from 'react';
import mockEnable from '@/lib/msw/mock-enable';
import { SessionContext } from '@/app/api/auth/SessionContext';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enable') {
  mockEnable();
}

function Providers({ children }: { children: ReactNode }) {
  return <SessionContext>{children}</SessionContext>;
}

export default Providers;
