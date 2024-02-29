'use client';

import apple from 'public/apple.svg';
import BUTTON from '@/constants/ui/button';
import ICON from '@/constants/ui/icon';
import Image from 'next/image';
import useUserStore from '@/store/user/userStore';
import { SIGN_UP_TYPE } from '@/constants/sign-in';
import { generateRandomString } from '@/lib/utils';
import useAppleAuth from '@/hooks/auth/useAppleAuth';
import { useRouter } from 'next/navigation';

function AppleSignIn() {
  const { setSignUpType } = useUserStore();
  const router = useRouter();

  useAppleAuth();

  const loginWithApple = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof window.AppleID !== 'undefined') {
      e.preventDefault();
      window.AppleID.auth.init({
        clientId: process.env.NEXT_PUBLIC_APPLE_CLIENT_ID,
        scope: 'name email',
        redirectURI: process.env.NEXT_PUBLIC_APPLE_REDIRECT_URI,
        state: generateRandomString(16),
        nonce: generateRandomString(16),
        usePopup: true,
      });
    }

    try {
      setSignUpType(SIGN_UP_TYPE.apple.index);
      const res = await window.AppleID.auth.signIn();
      const { code } = res.authorization;
      router.push(`/sign-in/apple?code=${code}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      type="button"
      className="relative w-full h-[3rem] bg-white rounded-xl active:brightness-90 max-w-[480px] flex justify-center items-center"
      onClick={loginWithApple}
    >
      <Image
        src={apple}
        alt={BUTTON.apple}
        width={ICON.buttonWidth}
        className="absolute top-3 left-3"
      />
      <span className="text-black text-opacity-85">{BUTTON.apple}</span>
    </button>
  );
}

export default AppleSignIn;
