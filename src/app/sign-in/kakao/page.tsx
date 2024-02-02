'use client';

import CALLBACK_URL from '@/constants/url';
import useUserStore from '@/store/user/userStore';
import getUserInfo from '@/app/api/auth/getUserInfo';

import { useEffect } from 'react';
import { setCookie } from '@/lib/cookie';
import { encrypt } from '@/utils/crypto';
import { useRouter } from 'next/navigation';
import { getEmail } from '@/utils/getEmail';
import { useToast } from '@/app/_components/ui/use-toast';
import { setTokensInCookies } from '@/utils/setTokensInCookies';
import { ERROR_CODE, STATUS_CODE } from '@/constants/api/statusCode';

// 카카오 소셜 로그인 REDIRECT URI PAGE
function Page() {
  const { home, service, signUp } = CALLBACK_URL;
  const { invalidEmail, noAccount, haveAnotherAccount } = ERROR_CODE;
  const { toast } = useToast();
  const { signUpType, setId, setEmail } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    const signIn = async () => {
      let email;
      const code = new URL(window.location.href).searchParams.get('code');
      const response = await getUserInfo({ code, signUpType });

      if (response && response.data && response.data.refresh_token) {
        setTokensInCookies({
          accessToken: response.data.access_token,
          refreshToken: response.data.refresh_token,
        });
      }

      switch (response?.status) {
        case STATUS_CODE.ok:
          router.push(service);
          setId(response.data.id);
          break;

        case invalidEmail:
          router.push(home);
          break;

        case noAccount:
          email = getEmail(response?.data.access_token);

          setCookie({
            name: 'access_token',
            value: encrypt(response.data.access_token),
            options: { path: '/' },
          });

          if (email) setEmail(email as string);

          router.push(signUp);
          break;

        case haveAnotherAccount:
          router.push(home);
          break;

        default:
          router.push(home);
          break;
      }

      toast({ variant: 'default', description: response?.message });
    };

    signIn();
  }, [
    haveAnotherAccount,
    home,
    invalidEmail,
    noAccount,
    router,
    service,
    setEmail,
    setId,
    signUp,
    signUpType,
    toast,
  ]);

  return <div />;
}

export default Page;
