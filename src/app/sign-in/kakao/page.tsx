'use client';

import CALLBACK_URL from '@/constants/url';
import useUserStore from '@/store/user/userStore';
import getUserInfo from '@/app/api/auth/getUserInfo';
import loadingJson from '$/lotties/loading.json';
import Lottie from 'react-lottie';
import lottieOption from '@/utils/lottieOption';

import { useEffect } from 'react';
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

          sessionStorage.setItem(
            'auth_token',
            encrypt(response.data.access_token) as string,
          );

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

      toast({
        variant: 'default',
        description:
          response?.message ||
          '로그인 과정에서 문제가 생겼습니다. 같은 문제가 반복된다면 앱 삭제 후 다시 설치해주세요.',
        duration: 2000,
      });
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

  return (
    <div className="flex flex-col h-full-size-omit-nav justify-center items-center">
      <Lottie options={lottieOption(loadingJson)} width={200} height={200} />
    </div>
  );
}

export default Page;
