import Image from 'next/image';
import type { OneSearchResultProps } from '@/types/map/BottomSheetProps';
import { Star } from 'lucide-react';
import { useState } from 'react';
import { IconButton, Rating } from '@mui/material';
import { COLOR } from '@/styles/color';
import { useImageStore, useImagesStore } from '@/store/modal/imageModalStore';
import mapApi from '@/apis/map/apis/map';

/**
 * @description 검색 결과의 항목을 하나씩 보여주기 위한 소단위의 컴포넌트입니다.
 * @param item 정보를 하나씩 받아와 보여주기 위해 가져옵니다.
 * @param handleMovePosition 마커를 눌렀을 시에 해당 마커로 이동시키기 위해서 사용합니다.
 */
function OneSearchResult({ item, onMovePosition }: OneSearchResultProps) {
  const {
    id,
    is_like,
    name,
    review_count,
    road_address,
    score_average,
    thumbnail_image,
  } = item;

  const [isLike, setIsLike] = useState<boolean>(() => is_like);

  const handleImageModalOpen = useImageStore(state => state.setModalOpen);
  const handleCarouselOpen = useImagesStore(state => state.setModalOpen);

  // 북마크 혹은 좋아요를 눌렀을 때 일어나는 함수
  const handleLikeEvent = () => {
    setIsLike(prev => !prev);
    if (!isLike) {
      mapApi.postGymLike(id);
    } else {
      mapApi.deleteGymLike(id);
    }
  };

  const onCarouselOpen = () => {
    if (typeof thumbnail_image === 'string') {
      handleImageModalOpen(thumbnail_image);
    } else {
      handleCarouselOpen(thumbnail_image);
    }
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
              className="cursor-pointer ellipsis max-w-52"
              onClick={onSearchClick}
              tabIndex={0}
            >
              {name}
            </button>
            <IconButton
              onClick={handleLikeEvent}
              className="mr-2"
              size="large"
              aria-label="like"
            >
              <Star
                strokeWidth={1}
                stroke={isLike ? COLOR.star : COLOR.gray}
                fill={isLike ? COLOR.star : 'none'}
              />
            </IconButton>
          </div>
          <button
            className="cursor-pointer flex"
            type="button"
            onClick={onSearchClick}
          >
            <Rating value={score_average} readOnly />
            {`${score_average} / 리뷰 ${review_count}건`}
          </button>
          <div>{road_address}</div>
        </div>
        <button
          type="button"
          onClick={onCarouselOpen}
          className="cursor-pointer rounded-md relative overflow-hidden"
        >
          <Image
            className="cursor-pointer"
            src={
              typeof thumbnail_image === 'object'
                ? thumbnail_image[0]
                : thumbnail_image
            }
            onClick={onCarouselOpen}
            alt={`${name} 메인 이미지`}
            width={88}
            height={88}
          />
          {thumbnail_image.length > 1 ?? (
            <div className="absolute rounded-3xl flex items-center justify-center text-sm w-5 h-5 right-1 bottom-1 bg-primary text-white opacity-70">
              {thumbnail_image.length}
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default OneSearchResult;
