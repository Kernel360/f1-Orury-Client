'use client';

import { KAKAO_AUTH_URL } from '@/constants/url';

import kakao from 'public/kakao.svg';
import BUTTON from '@/constants/ui/button';
import ICON from '@/constants/ui/icon';
import Image from 'next/image';
import Link from 'next/link';

function Kakao() {
  return (
    <Link
      href={KAKAO_AUTH_URL}
      className="relative w-full h-[3rem] bg-kakao rounded-xl active:brightness-90 max-w-[480px] flex justify-center items-center"
    >
      <Image
        src={kakao}
        alt={BUTTON.kakao}
        width={ICON.buttonWidth}
        className="absolute top-3 left-3"
      />
      <span className="text-black text-opacity-85">{BUTTON.kakao}</span>
    </Link>
  );
}

export default Kakao;
