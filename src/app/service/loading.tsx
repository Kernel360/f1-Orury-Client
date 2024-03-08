'use client';

import Lottie from 'react-lottie';
import loadingJson from '$/lotties/loading.json';

function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingJson,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="flex flex-col h-full-size-omit-nav justify-center items-center">
      <Lottie options={defaultOptions} width={200} height={200} />
    </div>
  );
}

export default Loading;
