'use client';

import { useState } from 'react';
import Image from 'next/image';
import ModifyInput from '@/app/_components/common/ModifyInput';
import { Camera, Pencil } from 'lucide-react';

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
          <Camera size={24} stroke="#D7DCE3" strokeWidth={1.5} fill="#855AFF" />
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
            <Pencil
              size={16}
              color="#855AFF"
              strokeWidth={2.5}
              className="mt-1"
            />
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
