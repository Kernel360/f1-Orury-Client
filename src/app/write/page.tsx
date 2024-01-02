'use client';

import Header from '@/app/_components/common/Header';
import Content from '@/app/_components/common/Content';
import Button from '@/app/_components/buttons/Button';
import { useState } from 'react';
import PhotoBooth from '@/app/write/_components/PhotoBooth';
import TextInput from '@/app/_components/common/TextInput';

// TODO: Form 형태로 변경해야함
function Page() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const inputHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(event.target.value);
  };

  const clickHandler = () => {};

  return (
    <div>
      <Header title="게시글 작성" isExit />
      <main className="flex flex-col justify-between items-center bg-white px-4 pt-7 h-[calc(90vh)]">
        <div className="flex flex-col gap-4 w-full">
          <TextInput
            placeholder="제목"
            width="w-full"
            onChange={inputHandler}
            value={title}
            isFocus
          />
          <Content
            placeholder="내용을 입력해주세요"
            content={content}
            setContent={setContent}
          />
        </div>
        <div className="flex flex-col items-end w-full gap-2 pb-safe">
          <PhotoBooth />
          <Button color="primary" content="작성 완료" onClick={clickHandler} />
        </div>
      </main>
    </div>
  );
}

export default Page;
