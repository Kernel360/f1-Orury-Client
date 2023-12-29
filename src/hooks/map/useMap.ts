import {
  MapMoveControlType,
  OneSearchKeywordType,
  SearchKeywordListType,
} from '@/types/map/map';
import { useState } from 'react';
import { searchMock } from '@/__mock__/data/map.mock';
import { DEFAULT_POSITION } from '@/constants/map';

function useMap() {
  // 맵상에서 선택된 지도가 있는지 판단하는 state
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);
  // 검색중인지 판단하는 state
  const [isSearching, setIsSearching] = useState<boolean>(false);
  // 검색 결과 state
  const [searchResult] = useState<SearchKeywordListType>(searchMock);
  // 보여질 이미지 모달
  const [imageModalUrl, setImageModalUrl] = useState<string>('');
  // 이미지 모달이 열려있는지 확인합니다.
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);
  // 보여질 회전 이미지
  const [carouselImages, setCarouselImages] = useState<string[]>([]);
  // 보여질 해당 가게 미리보기가 열려있는 모달인지
  const [carouselModalIsOpen, setCarouselModalIsOpen] =
    useState<boolean>(false);

  // 현재 지도의 좌표와 이동시 부드럽게 움직이는지 여부를 나타냅니다.
  const [mapInfo, setMapInfo] = useState<MapMoveControlType>({
    center: DEFAULT_POSITION,
    isPanto: false,
  });

  // 해당 지도의 아이디를 저장합니다. 해당 state를 통해 detail 정보를 불러옵니다.
  const [selectMarkerId, setSelectMarkerId] = useState<number | null>(null);

  const onSearchingFocus = () => {
    setIsSearching(true);
  };

  const onSearchingBlur = () => {
    setIsSearching(false);
  };

  const onDisMiss = () => {
    setIsSheetOpen(false);
  };

  const handleImageClosed = () => {
    setImageModalUrl('');
    setIsImageModalOpen(false);
  };

  const handleImageOpen = (imgUrl: string) => {
    setImageModalUrl(imgUrl);
    setIsImageModalOpen(true);
  };

  const handleCarouselClosed = () => {
    setCarouselImages([]);
    setCarouselModalIsOpen(false);
  };

  const handleCarouselOpen = (imgUrls: string[]) => {
    setCarouselImages(imgUrls);
    setCarouselModalIsOpen(true);
  };

  // 좌표를 이동 시키고 열어주는 함수
  const handleMovePosition = (item: OneSearchKeywordType) => {
    setMapInfo({
      center: item.position,
      isPanto: true,
    });

    if (isSearching) setIsSearching(false);

    if (isSheetOpen) setIsSheetOpen(false);

    setSelectMarkerId(item.id);
    setIsSheetOpen(true);
  };

  const isBottomSheetOpen = isSheetOpen && !isSearching;

  return {
    carouselModalIsOpen,
    carouselImages,
    isImageModalOpen,
    isBottomSheetOpen,
    isSearching,
    imageModalUrl,
    mapInfo,
    selectMarkerId,
    searchResult,
    onDisMiss,
    onSearchingFocus,
    onSearchingBlur,
    handleCarouselClosed,
    handleMovePosition,
    handleImageClosed,
    handleCarouselOpen,
    handleImageOpen,
  };
}

export default useMap;
