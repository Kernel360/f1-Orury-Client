'use client';

import Image from 'next/image';
import { magnifying_glass } from '$/community/searchBar';
import { x_mark } from '$/header';
import { useState } from 'react';

function SearchBar() {
  const [text, setText] = useState<string>('');

  const textHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const clearTextHandler = () => {
    setText('');
  };

  return (
    <section className="relative mx-4 my-2">
      <button type="button" className="absolute left-2.5 top-2.5">
        <Image src={magnifying_glass} alt="검색" />
      </button>
      <input
        className="w-full h-10 pl-10 pr-2 rounded-md outline-none bg-grey-100 placeholder:text-grey-500"
        placeholder="검색어를 입력해주세요"
        onChange={textHandler}
        value={text}
      />
      <button
        type="button"
        onClick={clearTextHandler}
        className="absolute right-2.5 top-2 cursor-pointer"
      >
        <Image src={x_mark} alt="삭제" />
      </button>
    </section>
  );
}

export default SearchBar;
