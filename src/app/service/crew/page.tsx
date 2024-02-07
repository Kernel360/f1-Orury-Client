'use client';

import Lottie from 'react-lottie';
import lottieOption from '@/utils/lottieOption';
import getReady from '$/lotties/get_ready.json';

import { giants } from '@/styles/fonts';

function Page() {
  return (
    <div className="flex flex-col h-full-size-omit-nav justify-center items-center">
      <Lottie options={lottieOption(getReady)} width={200} height={200} />
      <span
        className={`text-lg sm:text-xl text-grey-600 pt-4 ${giants.className}`}
      >
        곧 크루 서비스가 공개될 예정입니다!
      </span>
    </div>
  );
}

export default Page;
