import type { SearchKeyWordProps } from '@/types/map/BottomSheetProps';
import { FormEvent, useRef } from 'react';
import { Search } from 'lucide-react';
import clsx from 'clsx';
import { COLOR } from '@/styles/color';

/**
 * @description 검색을 하기 위한 컴포넌트
 * @param isSearching 현재 검색상태인지 확인하는 state (검색 상태에 따른 css를 적용하기 위해서 필요합니다.)
 * @param setIsSearching 검색 상태를 관리합니다.
 */
function SearchBar({ isSearching, onSearchingFocus }: SearchKeyWordProps) {
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearchFocus = () => {
    onSearchingFocus();
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const containerClassName = clsx(
    'z-20 absolute left-1/2 translate-x-[-50%] duration-500',
    { 'top-0 h-8 w-full': isSearching },
    { 'top-2 h-8 w-[94%]': !isSearching },
  );
  const formClassName = clsx(
    'relative bg-white pl-3 pr-8 duration-500',
    { 'py-4': isSearching },
    { 'py-2 top-2 rounded-lg': !isSearching },
  );
  return (
    <div className={containerClassName}>
      <form onSubmit={handleSearchSubmit} className={formClassName}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="searchKeyword">
          <input
            id="searchKeyword"
            ref={searchRef}
            placeholder="오늘은 어디를 가볼까?"
            onFocus={handleSearchFocus}
            className="w-full outline-0"
          />
        </label>
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button
          type="submit"
          className="absolute right-2 top-1/2 translate-y-[-50%]"
        >
          <Search stroke={COLOR.default} />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
