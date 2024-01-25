'use client';

import { useEffect } from 'react';
import { setCookie } from '@/lib/cookie';
import { encrypt } from '@/utils/crypto';
import { useRouter } from 'next/navigation';
import { useToast } from '@/app/_components/ui/use-toast';
import { ERROR_CODE, STATUS_CODE } from '@/constants/api/statusCode';

import CALLBACK_URL from '@/constants/url';
import getUserInfo from '@/app/api/auth/getUserInfo';
import useSignInState from '@/store/sign-in/signInStore';

// 카카오 소셜 로그인 REDIRECT URI PAGE
function Page() {
  const { home, service } = CALLBACK_URL;
  const { invalidEmail, noAccount, haveAnotherAccount } = ERROR_CODE;
  const { toast } = useToast();
  const router = useRouter();
  const { signUpType } = useSignInState();

  useEffect(() => {
    const signIn = async () => {
      const authCode = new URL(window.location.href).searchParams.get('code');
      const response = await getUserInfo({
        code: authCode,
        signUpType,
      });

      if (response) {
        setCookie({
          name: 'access_token',
          value: encrypt(response.data.access_token),
        });
        setCookie({
          name: 'refresh_token',
          value: encrypt(response.data.refresh_token),
        });
      }

      // 로그인 성공
      if (response?.status === STATUS_CODE.ok) router.push(service);

      // 올바르지 않은 형식의 이메일을 가진 유저일 경우
      if (response?.status === invalidEmail) {
        router.push(home);
        toast({
          description: response.message,
        });
      }

      // 가입된 계정이 존재하지 않은 비회원인 경우
      if (response?.status === noAccount) {
        router.push(service);
        toast({
          description: response.message,
        });
      }

      // 다른 소셜 마디어를 통해 가입된 이력이 있는 경우
      if (response?.status === haveAnotherAccount) {
        router.push(home);
        toast({
          description: response.message,
        });
      }
    };

    signIn();
  }, [
    haveAnotherAccount,
    home,
    invalidEmail,
    noAccount,
    router,
    service,
    signUpType,
    toast,
  ]);

  return <div />;
}

export default Page;
