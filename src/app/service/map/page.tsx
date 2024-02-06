'use client';

import SearchBar from '@/app/service/map/_components/search/SearchBar';
import BottomSheetContainer from '@/app/service/map/_components/bottom-sheet/BottomSheetContainer';
import SearchResultModal from '@/app/service/map/_components/search/SearchResultModal';
import KakaoBackGroundMap from '@/app/service/map/_components/kakao/KakaoBackGroundMap';
import ImageSliderModal from '@/app/_components/modal/ImageSliderModal';
import ImageModal from '@/app/_components/modal/ImageModal';
import type { MapMoveControlType, OneSearchKeywordType } from '@/types/map/map';
import { useEffect, useState } from 'react';
import { DEFAULT_POSITION } from '@/constants/map';
import { useRouter, useSearchParams } from 'next/navigation';
import useReviewStore from '@/store/review/reviewStore';
import { useImageStore, useImagesStore } from '@/store/modal/imageModalStore';
import useMap from '@/apis/map/hooks/useMap';
import { useGeoLocation } from '@/hooks/map/useGeoLocation';
import ReviewModalContainer from './_components/review-modal/ReviewModalContainer';

function Page() {
  const router = useRouter();
  const closeModal = useReviewStore(state => state.reset);
  const keyword = useSearchParams().get('keyword') ?? '';
  const selectId = useSearchParams().get('selectId') ?? '';

  // 현재 지도의 좌표와 이동시 부드럽게 움직이는지 여부를 나타냅니다.
  const [mapInfo, setMapInfo] = useState<MapMoveControlType>({
    center: { lat: DEFAULT_POSITION.latitude, lng: DEFAULT_POSITION.longitude },
    isPanto: false,
  });

  // // 첫 화면으로 검색창에 default 값으로 들어간다.
  const { isLoading, data } = useMap.useGetSearchList(mapInfo.center, keyword);

  // 맵상에서 선택된 지도가 있는지 판단하는 state
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  // 검색중인지 판단하는 state
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const handleImageClosed = useImageStore(state => state.setModalClose);
  const handleCarouselClosed = useImagesStore(state => state.setModalClose);

  const { location } = useGeoLocation();

  useEffect(() => {
    setMapInfo(() => {
      return {
        isPanto: true,
        center: { lat: location.latitude, lng: location.longitude },
      };
    });
  }, [location]);

  // 좌표를 이동 시키고 열어주는 함수
  const handleMovePosition = (item: OneSearchKeywordType) => {
    const { latitude, longitude } = item.position;
    setMapInfo({
      center: { lat: latitude, lng: longitude },
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

  const isEmptyData = !data || isLoading;

  return (
    <div className="h-full relative">
      <ReviewModalContainer isMyPage={false} openPosition="right" />
      <ImageModal />
      <ImageSliderModal />
      <KakaoBackGroundMap
        mapInfo={mapInfo}
        positionList={isEmptyData ? [] : data.data.data}
        handleMovePosition={handleMovePosition}
      />
      <SearchBar
        isSearching={isSearching}
        onSearchingFocus={() => setIsSearching(true)}
      />
      <SearchResultModal
        searchResult={isEmptyData ? [] : data.data.data}
        isSearching={isSearching}
        searchLoading={isLoading}
        onSearchingBlur={() => setIsSearching(false)}
        handleMovePosition={handleMovePosition}
      />
      <BottomSheetContainer
        selectId={selectId}
        isSheetOpen={isSheetOpen}
        onDisMiss={() => setIsSheetOpen(false)}
      />
    </div>
  );
}

export default Page;
