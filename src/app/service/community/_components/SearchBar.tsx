'use client';

import clsx from 'clsx';

import { useRef, useState } from 'react';
import { Search } from 'lucide-react';
import type { SearchBarProps } from '@/types/community/searchBar';

function SearchBar({ ...props }: SearchBarProps) {
  const [text, setText] = useState('');
  const { setIsSearchingFocus, setSearchText, isSearchingFocus } = props;

  const searchRef = useRef<HTMLInputElement>(null);

  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleTextBlur = () => {
    setSearchText(text);
  };

  const handleSearchFocus = () => {
    setIsSearchingFocus(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleTextBlur();
  };

  const sectionClassName = clsx(
    'flex justify-center relative z-[9] left-1/2 translate-x-[-50%] duration-500',
    { 'top-0 h-8 w-full px-2': isSearchingFocus },
    { 'top-0 h-8 w-[96%] my-2': !isSearchingFocus },
  );

  return (
    <section className={sectionClassName}>
      <input
        className="w-full h-10 pl-4 pr-10 rounded-xl outline-none bg-grey-100 border-2 border-white placeholder:text-grey-500 focus:border-2 focus:border-primary"
        ref={searchRef}
        placeholder="검색어를 입력해주세요"
        onChange={onTextChange}
        onBlur={handleTextBlur}
        onFocus={handleSearchFocus}
        onKeyDown={handleKeyDown}
        value={text}
      />
      <button type="button" className="absolute right-4 top-2">
        <Search color="#747C84" />
      </button>
    </section>
  );
}

export default SearchBar;
