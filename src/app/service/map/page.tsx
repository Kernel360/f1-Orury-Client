'use client';

import SearchBar from '@/app/service/map/_components/map/SearchBar';
import BottomSheetContainer from '@/app/service/map/_components/map/BottomSheetContainer';
import SearchResultModal from '@/app/service/map/_components/map/SearchResultModal';
import KakaoBackGroundMap from '@/app/service/map/_components/map/KakaoBackGroundMap';
import ImageSliderModal from '@/app/_components/modal/ImageSliderModal';
import ImageModal from '@/app/_components/modal/ImageModal';
import ReviewModal from '@/app/service/map/_components/Review/ReviewModal';
import ReviewStoreProps from '@/store/review/reviewStore';
import ReviewRegisterModal from '@/app/service/map/_components/Review/ReviewRegisterModal';
import type { MapMoveControlType, OneSearchKeywordType } from '@/types/map/map';
import { useEffect, useState } from 'react';
import { DEFAULT_POSITION } from '@/constants/map';
import { useRouter, useSearchParams } from 'next/navigation';
import useGetMapList from '@/hooks/map/useGetMapList';
import { useImagesStore, useImageStore } from '@/store/modal/imageModalStore';

function Page() {
  const router = useRouter();
  const isOpen = ReviewStoreProps(state => state.isOpen);
  const keyword = useSearchParams().get('keyword') ?? '';
  const selectId = useSearchParams().get('selectId') ?? '';

  // 첫 화면으로 검색창에 default 값으로 들어간다.
  const { data: searchResult, mutate: serachKeyWord } = useGetMapList(keyword);
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

  // 현재 지도의 좌표와 이동시 부드럽게 움직이는지 여부를 나타냅니다.
  const [mapInfo, setMapInfo] = useState<MapMoveControlType>({
    center: DEFAULT_POSITION,
    isPanto: false,
  });

  // 리뷰 모달의 열고 닫힘을 관리합니다. 모달이 열리기 위해서는 리뷰 아이디가 선택이 되어있어야 합니다.
  const [isReviewModalOpen, setIsReviewModalOpen] = useState<boolean>(false);

  // 리뷰 모달을 닫기 위한 함수입니다.
  const onReviewModalClose = () => {
    router.push(`?keyword=${keyword}`);
    setIsReviewModalOpen(false);
  };

  // 좌표를 이동 시키고 열어주는 함수
  const handleMovePosition = (item: OneSearchKeywordType) => {
    setMapInfo({
      center: item.position,
      isPanto: true,
    });

    if (isSearching) setIsSearching(false);

    if (isSheetOpen) setIsSheetOpen(false);
    router.push(`?selectId=${item.id}&keyword=${keyword}`);
    setIsSheetOpen(true);
  };

  useEffect(() => {
    if (selectId && searchResult) {
      handleMovePosition(
        searchResult.item.filter(v => v.id === Number(selectId))[0],
      );
    }
  }, [selectId, searchResult]);

  // 검색 창을 누르면, 바텀 시트가 올라온다.
  useEffect(() => {
    serachKeyWord();
  }, [keyword, serachKeyWord]);

  useEffect(() => {
    return () => {
      handleImageClosed();
      handleCarouselClosed();
    };
  }, []);

  const isBottomSheetOpen = isSheetOpen && !isSearching;

  return (
    <div className="h-full relative">
      <ReviewRegisterModal isOpen={isOpen} />
      <ReviewModal
        position="right"
        isOpen={isReviewModalOpen}
        onCloseModal={onReviewModalClose}
        handleImageOpen={handleImageOpen}
      />
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
        handleMovePosition={() => setIsReviewModalOpen(true)}
      />
      <SearchBar
        isSearching={isSearching}
        onSearchingFocus={() => setIsSearching(true)}
      />
      <SearchResultModal
        searchResult={searchResult}
        isSearching={isSearching}
        onSearchingBlur={() => setIsSearching(false)}
        handleMovePosition={handleMovePosition}
        handleCarouselOpen={handleCarouselOpen}
      />
      <BottomSheetContainer
        isSheetOpen={isBottomSheetOpen}
        selectMarkerId={selectId}
        onDisMiss={() => setIsSheetOpen(false)}
        handleImageOpen={handleImageOpen}
        handleReviewOpen={() => setIsReviewModalOpen(false)}
      />
    </div>
  );
}

export default Page;
