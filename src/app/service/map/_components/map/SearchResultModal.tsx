'use client';

import clsx from 'clsx';
import OneSearchResult from '@/app/service/map/_components/map/OneSearchResult';
import type { SearchResultProps } from '@/types/map/BottomSheetProps';
import { Map } from 'lucide-react';
import { COLOR } from '@/styles/color';

/**
 * @description 해당 Modal은 검색의 결과를 나타내기 위한 Modal입니다.
 * @param isSearching 현재 검색중인지 확인합니다. UI를 나타내기 위해서 필요합니다.
 * @param setIsSearching 검색 종료를 하기 위해서 필요합니다.
 */
function SearchResultModal({
  isSearching,
  onSearchingBlur,
  handleMovePosition,
  handleCarouselOpen,
  searchResult,
}: SearchResultProps) {
  const handleSearchModalClose = () => {
    onSearchingBlur();
  };

  const modalClassName = clsx(
    'absolute border-t-[1px] border-primary left-1/2 overflow-y-scroll translate-x-[-50%] duration-500 p-5 mt-14 h-[calc(100vh-3.5rem)] w-full bg-white',
    { 'opacity-0 top-1/2 z-0': !isSearching },
    { 'z-50 top-0': isSearching },
  );

  const { item, total } = searchResult;

  const isEmptyResult = total === 0;

  return (
    <div className={modalClassName}>
      <div className="flex justify-between">
        <span>
          장소
          {total}
        </span>
        <button
          type="button"
          onClick={handleSearchModalClose}
          className="flex items-center text-sm gap-2"
        >
          <span className="text-sm text-gray-400">지도 보기</span>
          <Map size={20} stroke={COLOR.default} />
        </button>
      </div>
      {isEmptyResult ? (
        <div className="flex h-full justify-center items-center">
          검색 결과가 없습니다.
        </div>
      ) : (
        <div className="flex flex-col pt-2 mt-2 border-t-[1px] gap-2">
          {item.map(value => (
            <OneSearchResult
              key={value.id}
              item={value}
              onMovePosition={() => handleMovePosition(value)}
              handleCarouselOpen={handleCarouselOpen}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResultModal;
