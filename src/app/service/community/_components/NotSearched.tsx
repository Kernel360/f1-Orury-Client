import Lottie from 'react-lottie';
import searching from '$/lotties/searching.json';

import { giants } from '@/styles/fonts';

function NotSearched({ content }: { content: string }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: searching,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="flex flex-col h-[calc(100vh-208px)] sm:pt-0 pt-8 sm:justify-center items-center">
      <Lottie options={defaultOptions} width={200} height={200} />
      <span
        className={`text-lg sm:text-xl text-grey-600 pt-4 ${giants.className}`}
      >
        {content}
      </span>
    </div>
  );
}

export default NotSearched;
