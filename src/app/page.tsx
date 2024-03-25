'use client';

import CALLBACK_URL from '@/constants/url';
import Kakao from '@/app/_components/buttons/Kakao';
import Title from '@/app/_components/common/Title';
import Content from '@/app/_components/home/Content';
import AppleSignIn from '@/app/_components/buttons/Apple';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCookie } from '@/lib/cookie';

function Page() {
  const router = useRouter();

  useEffect(() => {
    if (getCookie({ name: 'access_token' })) {
      router.push(CALLBACK_URL.service);
    }
  }, []);

  useEffect(() => {
    if (getCookie({ name: 'access_token' })) {
      router.push(CALLBACK_URL.service);
    }
  }, []);

  return (
    <div className="flex pt-24 flex-col justify-between h-screen bg-[url('../../assets/images/background.webp')] bg-cover bg-opacity-90">
      <div className="flex flex-col items-center max-w-[30rem] mx-auto gap-7 ">
        <Title />
        <Content />
      </div>
      <div className="flex flex-col items-center justify-center pb-[8rem] gap-y-2">
        <Kakao />
        <AppleSignIn />
      </div>
    </div>
  );
}

export default Page;
