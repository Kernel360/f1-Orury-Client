/* eslint-disable react/jsx-curly-newline */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable lines-around-directive */
/* eslint-disable react/button-has-type */
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
import ReviewModalContainer from '../../_components/review/review-modal/ReviewModalContainer';
import Locations from './_components/kakao/Locations';

function Page() {
  const router = useRouter();
  const { reset } = useReviewStore(state => state);
  const keyword = useSearchParams().get('keyword') ?? '';
  const selectId = useSearchParams().get('selectId') ?? '';
  const location: any = Locations(); // 처음 현재 내위치 latitude, longitude
  // 맵상에서 선택된 지도가 있는지 판단하는 state
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);
  // 검색중인지 판단하는 state
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [mapInfo, setMapInfo] = useState<MapMoveControlType>({
    center: { lat: 0, lng: 0 }, // Default center
    isPanto: false, // 현재 지도의 좌표와 이동시 부드럽게 움직이는지 여부를 나타냅니다.
  });

  // // 첫 화면으로 검색창에 default 값으로 들어간다.
  const { isLoading, data } = useMap.useGetSearchList(mapInfo.center, keyword);

  const handleImageClosed = useImageStore(state => state.setModalClose);
  const handleCarouselClosed = useImagesStore(state => state.setModalClose);

  useEffect(() => {
    if (isSearching && isSheetOpen) {
      setIsSheetOpen(false);
    }
  }, [isSearching]);

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
    console.log('selectId', typeof selectId, selectId);
    if (selectId && selectId !== 'undefined') {
      const selectItem = data?.data.data.filter(
        v => v.id === Number(selectId),
      )[0];

      if (selectItem) {
        // 목록을 선택했을때 위도 경도
        handleMovePosition(selectItem);
      }
    }

    return () => {
      handleImageClosed();
      handleCarouselClosed();
      reset();
    };
  }, []);

  useEffect(() => {
    console.log('===============', mapInfo, mapInfo.center);
    if (typeof location === 'object' && location !== null) {
      // location이 object 이고 null이 아닌지 확인
      setMapInfo({
        center: { lat: location.latitude, lng: location.longitude },
        isPanto: false,
      });
    }
  }, [location]);

  const isEmptyData = !data || isLoading;

  return (
    <div className="h-full relative">
      <ReviewModalContainer isMyPage={false} openPosition="right" />
      <ImageModal />
      <ImageSliderModal />
      <button
        className="z-0"
        onClick={() =>
          setMapInfo({
            center: { lat: location.latitude, lng: location.longitude },
            isPanto: false,
          })
        }
      >
        중심으로 이동
      </button>
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
      {selectId && (
        <BottomSheetContainer
          selectId={selectId}
          isSheetOpen={isSheetOpen}
          onDisMiss={() => setIsSheetOpen(false)}
        />
      )}
    </div>
  );
}

export default Page;
