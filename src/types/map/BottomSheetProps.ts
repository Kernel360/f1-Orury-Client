import {
  DetailPlaceType,
  MapMoveControlType,
  OneSearchKeywordType,
  SearchKeywordListType,
} from '@/types/map/map';

interface OneSearchResultProps {
  item: OneSearchKeywordType;
  onMovePosition: () => void;
  handleCarouselOpen: (imgUrls: string[]) => void;
}

interface BottomSheetProps {
  selectMarkerId: number | null;
  isSheetOpen: boolean;
  onDisMiss: () => void;
  handleImageOpen: (url: string) => void;
}

interface BottomSheetInnerProps {
  data: DetailPlaceType;
  handleImageOpen: (url: string) => void;
}

interface SearchKeyWordProps {
  isSearching: boolean;
  onSearchingFocus: () => void;
}

interface KakaoBackGroundMapProps {
  mapInfo: MapMoveControlType;
  positionList: OneSearchKeywordType[];
  handleMovePosition: (item: OneSearchKeywordType) => void;
}

interface SearchResultProps {
  searchResult: SearchKeywordListType;
  isSearching: boolean;
  onSearchingBlur: () => void;
  handleCarouselOpen: (imgUrls: string[]) => void;
  handleMovePosition: (item: OneSearchKeywordType) => void;
}

export type {
  BottomSheetProps,
  OneSearchResultProps,
  BottomSheetInnerProps,
  KakaoBackGroundMapProps,
  SearchKeyWordProps,
  SearchResultProps,
};
