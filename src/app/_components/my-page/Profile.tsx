'use client';

import { useState } from 'react';
import Image from 'next/image';
import { camera, pencil } from '$/my-page';
import { x_mark } from '$/header';
import Button from '@/app/_components/ui/buttons/Button';
import Input from '@/app/_components//ui/common/Input';

function Profile({ ...props }: GetMyPageProps) {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const [nickname, setNickname] = useState(props.nickname);
  const beforeNickname = props.nickname;

  const clickHandler = () => {
    setIsToggled(isToggled => !isToggled);
  };

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const clearHandler = () => {
    setNickname('');
  };

  const cancelHandler = () => {
    setNickname(beforeNickname);
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

      <div className={`${isToggled ? 'block' : 'hidden'} w-full relative`}>
        <span className="w-28 font-thin inline-block">닉네임</span>
        <Input
          placeholder={nickname}
          onChange={inputHandler}
          value={nickname}
          width="[calc(100%-7rem)]"
          isFocus
        />
        <button
          type="button"
          onClick={clearHandler}
          className="absolute right-2 top-1.5 cursor-pointer"
        >
          <Image src={x_mark} alt="삭제" />
        </button>

        <div className="flex justify-end w-full">
          <div className="flex gap-2 w-40 h-10 mt-8">
            <Button
              content="취소"
              handler={cancelHandler}
              color="black"
              outline
            />
            <Button content="변경" handler={clickHandler} color="primary" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
