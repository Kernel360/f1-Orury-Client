import type { ReactionType, ReviewDataType } from '@/types/map/review';
import { SWRInfiniteResponse } from 'swr/infinite';

interface ReviewProps {
  position: 'center' | 'right';
  handleImageOpen: (url: string) => void;
}

interface FirstReviewModalProps {
  title: string;
  isFirst: boolean;
}

interface ReviewListProps {
  list: ReviewDataType[];
  handleImageOpen: (url: string) => void;
}

interface RadioGroupRatingProps {
  isOpen: boolean;
  handlePoint: (type: 'help' | 'interest' | 'like' | 'thumb' | 'angry') => void;
}

interface OneReviewProps {
  item: ReviewDataType;
  handleImageOpen: (url: string) => void;
}

interface IconChipListProps {
  item: ReactionType[];
  myReaction: 'help' | 'interest' | 'like' | 'thumb' | 'angry' | null;
}

interface ReviewStoreProps {
  isOpen: boolean;
  state: 'create' | 'fix' | 'mypage' | null;
  reviewId: number | null;
  onMyPage: () => void;
  onReview: (callBack: SWRInfiniteResponse) => void;
  setFixMode: (reviewId: number) => void;
  setCreateMode: () => void;
  closeMode: () => void;
  reset: () => void;
}

interface ReviewRegisterModalProps {
  isOpen: boolean;
}

interface OneReviewProps {
  item: ReviewDataType;
  handleImageOpen: (url: string) => void;
}

interface IconChipListProps {
  item: ReactionType[];
}

export type {
  ReviewProps,
  FirstReviewModalProps,
  ReviewListProps,
  RadioGroupRatingProps,
  IconChipListProps,
  OneReviewProps,
  ReviewDataType,
  ReviewStoreProps,
  ReviewRegisterModalProps,
};
