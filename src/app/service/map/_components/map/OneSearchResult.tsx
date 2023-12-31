import Image from 'next/image';
import type { OneSearchResultProps } from '@/types/map/BottomSheetProps';
import { Star } from 'lucide-react';
import { useState } from 'react';
import { Rating } from '@mui/material';
import { COLOR } from '@/styles/color';

/**
 * @description 검색 결과의 항목을 하나씩 보여주기 위한 소단위의 컴포넌트입니다.
 * @param item 정보를 하나씩 받아와 보여주기 위해 가져옵니다.
 * @param handleMovePosition 마커를 눌렀을 시에 해당 마커로 이동시키기 위해서 사용합니다.
 */
function OneSearchResult({
  item,
  onMovePosition,
  handleCarouselOpen,
}: OneSearchResultProps) {
  const { review_count, review_score, place_title, img, title, is_like } = item;

  const [isLike, setIsLike] = useState<boolean>(is_like);

  // 북마크 혹은 좋아요를 눌렀을 때 일어나는 함수
  const handleLikeEvent = () => {
    setIsLike(prev => !prev);
  };

  const onCarouselOpen = () => {
    handleCarouselOpen(img);
  };

  const onSearchClick = () => {
    // 해당 검색결과를 눌렀을 때 일어나는 함수
    onMovePosition();
  };

  return (
    <div>
      <div className="border-b-[1px] pb-2 flex justify-between">
        <div className="w-full">
          <div className="flex justify-between">
            <button
              type="button"
              key="title"
              className="cursor-pointer"
              onClick={onSearchClick}
              tabIndex={0}
            >
              {title}
            </button>
            <Star
              className="mr-2"
              onClick={handleLikeEvent}
              strokeWidth={1}
              stroke={isLike ? COLOR.star : COLOR.gray}
              fill={isLike ? COLOR.star : 'none'}
            />
          </div>
          <button
            className="cursor-pointer flex"
            type="button"
            onClick={onSearchClick}
          >
            <Rating value={review_score} readOnly />
            {`${review_score} / 리뷰 ${review_count}건`}
          </button>
          <div>{place_title}</div>
        </div>
        <button
          type="button"
          onClick={onCarouselOpen}
          className="cursor-pointer rounded-md relative overflow-hidden"
        >
          <Image
            className="cursor-pointer"
            src={img[0]}
            onClick={onCarouselOpen}
            alt={`${title} 메인 이미지`}
            width={88}
            height={88}
          />
          {img.length > 1 ? (
            <div className="absolute rounded-3xl flex items-center justify-center text-sm w-5 h-5 right-1 bottom-1 bg-primary text-white opacity-70">
              {img.length}
            </div>
          ) : null}
        </button>
      </div>
    </div>
  );
}

export default OneSearchResult;
