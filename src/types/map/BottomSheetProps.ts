import type {
  DetailPlaceType,
  MapMoveControlType,
  OneSearchKeywordType,
} from '@/types/map/map';

export interface OneSearchResultProps {
  item: OneSearchKeywordType;
  onMovePosition: () => void;
}

export interface BottomSheetProps {
  isSheetOpen: boolean;
  selectId: string;
  onDisMiss: () => void;
}

export interface BottomSheetInnerProps {
  data: DetailPlaceType;
}

export interface SearchKeyWordProps {
  isSearching: boolean;
  onSearchingFocus: () => void;
}

export interface KakaoBackGroundMapProps {
  mapInfo: MapMoveControlType;
  positionList?: OneSearchKeywordType[];
  handleMovePosition: (item: OneSearchKeywordType) => void;
}

export interface SearchResultProps {
  searchResult?: OneSearchKeywordType[];
  isSearching: boolean;
  searchLoading: boolean;
  onSearchingBlur: () => void;
  handleMovePosition: (item: OneSearchKeywordType) => void;
}

export interface MapCarouselProps {
  width?: string;
  images: string[];
}
