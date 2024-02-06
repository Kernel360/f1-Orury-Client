import {
  DetailPlaceType,
  MapMoveControlType,
  OneSearchKeywordType,
} from '@/types/map/map';

interface OneSearchResultProps {
  item: OneSearchKeywordType;
  onMovePosition: () => void;
}

interface BottomSheetProps {
  isSheetOpen: boolean;
  selectId: string;
  onDisMiss: () => void;
}

interface BottomSheetInnerProps {
  data: DetailPlaceType;
}

interface SearchKeyWordProps {
  isSearching: boolean;
  onSearchingFocus: () => void;
}

interface KakaoBackGroundMapProps {
  mapInfo: MapMoveControlType;
  positionList?: OneSearchKeywordType[];
  handleMovePosition: (item: OneSearchKeywordType) => void;
}

interface SearchResultProps {
  searchResult?: OneSearchKeywordType[];
  isSearching: boolean;
  searchLoading: boolean;
  onSearchingBlur: () => void;
  handleMovePosition: (item: OneSearchKeywordType) => void;
}

interface MapCarouselProps {
  width?: string;
  images: string[];
}

export type {
  BottomSheetProps,
  OneSearchResultProps,
  BottomSheetInnerProps,
  KakaoBackGroundMapProps,
  SearchKeyWordProps,
  SearchResultProps,
  MapCarouselProps,
};
