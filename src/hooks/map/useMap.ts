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

  const [selectReviewId, setSelectReviewId] = useState<number | null>(null);

  // 리뷰 모달의 열고 닫힘을 관리합니다. 모달이 열리기 위해서는 리뷰 아이디가 선택이 되어있어야 합니다.
  const [isReviewModalOpen, setIsReviewModalOpen] = useState<boolean>(false);

  // 리뷰 모달을 열기 위한 함수입니다.
  const handleReviewModalOpen = (selectReviewId: number) => {
    setSelectReviewId(selectReviewId);
    setIsReviewModalOpen(true);
  };

  // 리뷰 모달을 닫기 위한 함수입니다.
  const onReviewModalClose = () => {
    setSelectReviewId(null);
    setIsReviewModalOpen(false);
  };

  const onSearchingFocus = () => {
    setIsSearching(true);
  };

  // 검색상태에서 벗어났을 때, 검색창을 닫기 위해 사용됩니다.
  const onSearchingBlur = () => {
    setIsSearching(false);
  };

  // BottomSheet 가 닫히거나 닫을 때 실행되는 함수입니다.
  const onDisMiss = () => {
    setIsSheetOpen(false);
  };

  // 단일 이미지 모달을 닫기 위한 함수입니다.
  const handleImageClosed = () => {
    setImageModalUrl('');
    setIsImageModalOpen(false);
  };

  // 단일 이미지 모달을 열기 위한 함수입니다.
  const handleImageOpen = (imgUrl: string) => {
    setImageModalUrl(imgUrl);
    setIsImageModalOpen(true);
  };

  // 슬라이드 이미지 모달을 열기 위한 함수입니다.
  const handleCarouselOpen = (imgUrls: string[]) => {
    setCarouselImages(imgUrls);
    setCarouselModalIsOpen(true);
  };

  // 슬라이드 이미지 모달을 닫기 위한 함수입니다.
  const handleCarouselClosed = () => {
    setCarouselImages([]);
    setCarouselModalIsOpen(false);
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
    isReviewModalOpen,
    mapInfo,
    selectMarkerId,
    searchResult,
    selectReviewId,
    onReviewModalClose,
    onDisMiss,
    onSearchingFocus,
    onSearchingBlur,
    handleReviewModalOpen,
    handleCarouselClosed,
    handleMovePosition,
    handleImageClosed,
    handleCarouselOpen,
    handleImageOpen,
  };
}

export default useMap;
