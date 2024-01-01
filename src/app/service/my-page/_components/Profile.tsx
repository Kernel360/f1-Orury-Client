'use client';

import { useState } from 'react';
import Image from 'next/image';
import { camera, pencil } from '$/my-page';
import ModifyInput from '@/app/_components/common/ModifyInput';

function Profile({ ...props }: GetMyPageProps) {
  const [isToggled, setIsToggled] = useState(false);
  const [nickname, setNickName] = useState(props.nickname);

  const clickHandler = () => {
    setIsToggled(isToggled => !isToggled);
  };

  return (
    <section className="flex flex-col items-center gap-4 bg-white p-4 shadow-xl none">
      <div className="relative">
        <Image
          src={props.profile_image}
          alt="프로필 이미지"
          quality={100}
          width={120}
          height={120}
          priority
          className="rounded-full"
        />
        <button
          className="flex justify-center items-center w-8 h-8 absolute right-0 bottom-0 bg-purple-200 rounded-full"
          type="button"
        >
          <Image src={camera} alt="사진 변경" priority />
        </button>
      </div>

      <button
        className="flex flex-col items-center"
        type="button"
        onClick={clickHandler}
      >
        <div className={`${isToggled ? 'hidden' : 'block'}`}>
          <div className="flex gap-2 justify-center">
            <span className="font-bold ml-6">{nickname}</span>
            <Image src={pencil} alt="수정하기" />
          </div>
          <span className="font-light text-grey-500">{props.email}</span>
        </div>
      </button>
      <ModifyInput
        inputTitle="닉네임"
        value={nickname}
        setValue={setNickName}
        isToggled={isToggled}
        setIsToggled={setIsToggled}
      />
    </section>
  );
}

export default Profile;
