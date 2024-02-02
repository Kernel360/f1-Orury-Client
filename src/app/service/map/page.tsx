'use client';

import SearchBar from '@/app/service/map/_components/search/SearchBar';
import BottomSheetContainer from '@/app/service/map/_components/bottom-sheet/BottomSheetContainer';
import SearchResultModal from '@/app/service/map/_components/search/SearchResultModal';
import KakaoBackGroundMap from '@/app/service/map/_components/kakao/KakaoBackGroundMap';
import ImageSliderModal from '@/app/_components/modal/ImageSliderModal';
import ImageModal from '@/app/_components/modal/ImageModal';
import ReviewModal from '@/app/service/map/_components/review-modal/ReviewModal';
import type { MapMoveControlType, OneSearchKeywordType } from '@/types/map/map';
import { useEffect, useState } from 'react';
import { DEFAULT_POSITION } from '@/constants/map';
import { useRouter, useSearchParams } from 'next/navigation';
import { useImagesStore, useImageStore } from '@/store/modal/imageModalStore';
import useOruryMap from '@/app/service/map/_services/hook/useOruryMap';
import useReviewStore from '@/store/review/reviewStore';
import { useGeoLocation } from '@/hooks/map/useGeoLocation';
import { BACK_URL } from '@/constants/api';

function Page() {
  const router = useRouter();
  const closeModal = useReviewStore(state => state.reset);
  const keyword = useSearchParams().get('keyword') ?? '';
  const selectId = useSearchParams().get('selectId') ?? null;

  // 현재 지도의 좌표와 이동시 부드럽게 움직이는지 여부를 나타냅니다.
  const [mapInfo, setMapInfo] = useState<MapMoveControlType>({
    center: { lat: DEFAULT_POSITION.latitude, lng: DEFAULT_POSITION.longitude },
    isPanto: false,
  });

  // // 첫 화면으로 검색창에 default 값으로 들어간다.
  // const { searchLoading, searchResult } = useOruryMap.getSearchList(
  //   mapInfo.center,
  //   keyword,
  // );
  // console.log(searchResult);
  return <div>:)</div>;
  const {
    isOpen: isImageModalOpen,
    setModalOpen: handleImageOpen,
    setModalClose: handleImageClosed,
    image: imageModalUrl,
  } = useImageStore(state => state);

  const {
    isOpen: carouselModalIsOpen,
    setModalOpen: handleCarouselOpen,
    setModalClose: handleCarouselClosed,
    image: carouselImages,
  } = useImagesStore(state => state);

  // 맵상에서 선택된 지도가 있는지 판단하는 state
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  // 검색중인지 판단하는 state
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const { location } = useGeoLocation();

  useEffect(() => {
    setMapInfo(() => {
      return {
        isPanto: true,
        center: { lat: location.latitude, lng: location.longitude },
      };
    });
  }, []);

  // 좌표를 이동 시키고 열어주는 함수
  const handleMovePosition = (item: OneSearchKeywordType) => {
    setMapInfo({
      center: item.position,
      isPanto: true,
    });

    if (isSearching) setIsSearching(false);

    if (keyword) {
      router.push(`?selectId=${item.id}&keyword=${keyword}`);
    } else {
      router.push(`?selectId=${item.id}`);
    }
    setIsSheetOpen(true);
  };

  useEffect(() => {
    return () => {
      handleImageClosed();
      handleCarouselClosed();
      closeModal();
    };
  }, []);

  return (
    <div className="h-full relative">
      <ReviewModal position="right" handleImageOpen={handleImageOpen} />
      <ImageModal
        isOpen={isImageModalOpen}
        image={imageModalUrl}
        onCloseModal={handleImageClosed}
      />
      <ImageSliderModal
        isOpen={carouselModalIsOpen}
        images={carouselImages}
        onCloseModal={handleCarouselClosed}
      />
      <KakaoBackGroundMap
        mapInfo={mapInfo}
        positionList={searchResult?.item}
        handleMovePosition={handleMovePosition}
      />
      <SearchBar
        isSearching={isSearching}
        onSearchingFocus={() => setIsSearching(true)}
      />
      <SearchResultModal
        searchResult={searchResult}
        isSearching={isSearching}
        searchLoading={searchLoading}
        onSearchingBlur={() => setIsSearching(false)}
        handleMovePosition={handleMovePosition}
        handleCarouselOpen={handleCarouselOpen}
      />
      <BottomSheetContainer
        isSheetOpen={isSheetOpen && !isSearching}
        onDisMiss={() => setIsSheetOpen(false)}
        handleImageOpen={handleImageOpen}
      />
    </div>
  );
}

export default Page;
