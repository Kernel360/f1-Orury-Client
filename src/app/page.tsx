'use client';

import Kakao from '@/app/_components/buttons/Kakao';
import Title from '@/app/_components/common/Title';
import Content from '@/app/_components/home/Content';
import Button from '@/app/_components/buttons/Button';
import GuideModal from '@/app/_components/home/GuideModal';

import { useState } from 'react';

function Page() {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(true);
  };

  const handleCloseModalClick = () => {
    setIsClicked(false);
  };

  return (
    <div className="flex pt-24 flex-col justify-between h-screen bg-[url('../../assets/images/background.webp')] bg-cover bg-opacity-90">
      <div className="flex flex-col items-center max-w-[30rem] mx-auto gap-7 ">
        <Title />
        <Content />
        <div className="flex justify-center w-32">
          <Button
            content="앱 다운로드"
            color="primary"
            onClick={handleButtonClick}
          />
        </div>
      </div>
      <div className="flex justify-center pb-[8rem] mx-4">
        <Kakao />
      </div>
      {isClicked && <GuideModal cancelHandler={handleCloseModalClick} />}
    </div>
  );
}

export default Page;
