'use client';

import Image from 'next/image';
import send from '$/community/commentBar/send.svg';
import { useState } from 'react';

function CommentBar() {
  const [text, setText] = useState<string>('');

  const textHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const clearTextHandler = () => {
    setText('');
  };

  return (
    <section className="sticky bottom-0 left-0 ">
      <input
        className="w-full py-2 pl-4 pr-10 rounded-md outline-none bg-grey-50 placeholder:text-grey-500 caret-primary"
        placeholder="댓글을 입력하세요."
        onChange={textHandler}
        value={text}
      />
      <button
        type="button"
        onClick={clearTextHandler}
        className="absolute right-2 top-1.5 cursor-pointer"
      >
        <Image src={send} alt="전송" />
      </button>
    </section>
  );
}

export default CommentBar;
