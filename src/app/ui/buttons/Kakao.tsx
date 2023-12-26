'use client';

import kakao from 'public/kakao.svg';
import BUTTON from '@/constants/ui/button';
import ICON from '@/constants/ui/icon';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import URL from '@/constants/url';

function Kakao() {
  return (
    <button
      type="button"
      onClick={() => signIn('kakao', { callbackUrl: URL.service })}
      className="relative w-full h-[3rem] bg-kakao rounded-xl active:brightness-90 max-w-[480px]"
    >
      <Image
        src={kakao}
        alt={BUTTON.kakao}
        width={ICON.buttonWidth}
        className="absolute top-3 left-3"
      />
      <span className="text-black text-opacity-85 ">{BUTTON.kakao}</span>
    </button>
  );
}

export default Kakao;
