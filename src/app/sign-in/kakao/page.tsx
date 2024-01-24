'use client';

import { setCookie } from '@/lib/cookie';
import { encrypt } from '@/utils/crypto';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import getUserInfo from '@/app/api/auth/getUserInfo';
import useSignInState from '@/store/sign-in/signInStore';

// 카카오 소셜 로그인 REDIRECT URI PAGE
function Page() {
  const router = useRouter();
  const { signUpType } = useSignInState();

  useEffect(() => {
    const signin = async () => {
      const code = new URL(window.location.href).searchParams.get('code');
      const response = await getUserInfo({ code, signUpType });

      if (response) {
        setCookie({
          name: 'access_token',
          value: encrypt(response.data.access_token),
        });
        setCookie({
          name: 'refresh_token',
          value: encrypt(response.data.access_token),
        });
      }

      // TODO: STATUS CODE 상수화 필요
      if (response?.status === 200) router.push('/service');
      if (response?.status === 404) router.push('/sign-up');
    };

    signin();
  }, []);

  return <div />;
}

export default Page;
