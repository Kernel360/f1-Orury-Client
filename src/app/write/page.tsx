'use client';

import Header from '@/app/ui/common/Header';
import Input from '@/app/ui/common/Input';
import Textarea from '@/app/ui/common/Textarea';
import Button from '@/app/ui/buttons/Button';
import { useState } from 'react';
import PhotoBooth from '@/app/write/_components/PhotoBooth';

function Page() {
  const [title, setTitle] = useState('');
  // const [content, setContent] = useState('');

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const clickHandler = () => {};

  return (
    <div>
      <Header title="게시글 작성" isExit />
      <main className="flex flex-col justify-between items-center bg-white px-4 pt-7 h-[calc(90vh)]">
        <div className="flex flex-col gap-4 w-full">
          <Input
            placeholder="제목"
            width="w-full"
            onChange={inputHandler}
            value={title}
            isFocus
          />
          <Textarea placeholder="내용을 입력해주세요" />
        </div>
        <div className="flex flex-col items-end w-full gap-2 pb-safe">
          <PhotoBooth />
          <Button color="primary" content="작성 완료" handler={clickHandler} />
        </div>
      </main>
    </div>
  );
}

export default Page;
