'use client';

import lottieOption from '@/utils/lottieOption';
import Lottie from 'react-lottie';
import notFound from '$/lotties/notFound.json';
import Button from '@/app/_components/buttons/Button';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  const handleClick = () => router.push('/service');

  return (
    <div className="global flex gap-6 flex-col h-full-size-omit-nav justify-center items-center">
      <Lottie options={lottieOption(notFound)} width={200} height={200} />
      <span className="text-sm text-grey-500 text-center">
        잘못된 접근으로
        <br />
        페이지를 찾을 수 없습니다.
      </span>
      <div className="w-32">
        <Button
          onClick={handleClick}
          content="홈으로 돌아가기"
          color="primary"
        />
      </div>
    </div>
  );
}
