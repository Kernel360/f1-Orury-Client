'use client';

import { removeCookie } from '@/lib/cookie';
import { useRouter } from 'next/navigation';

function SignOut() {
  const router = useRouter();

  const onClick = () => {
    removeCookie({
      name: 'access_token',
      options: { path: '/' },
    });
    removeCookie({ name: 'refresh_token', options: { path: '/' } });
    router.push('/');
  };

  return (
    <button type="button" onClick={onClick}>
      <span className="text-red font-semibold">로그아웃</span>
    </button>
  );
}

export default SignOut;
