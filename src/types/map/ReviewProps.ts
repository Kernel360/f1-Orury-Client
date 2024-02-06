import type {
  ReactionType,
  ReviewDataType,
  ReviewStateType,
} from '@/types/map/review';

interface ResetAPI {
  mutate: () => void;
}

interface ReviewRegisterProps extends ResetAPI {
  gym_name?: string;
}

interface OpenPosition {
  openPosition: 'center' | 'right';
}

interface ReviewProps extends OpenPosition {}

interface FirstReviewModalProps {
  title: string;
  isFirst: boolean;
}

interface RadioGroupRatingProps {
  isOpen: boolean;
  handlePoint: (type: 'help' | 'interest' | 'like' | 'thumb' | 'angry') => void;
}

interface ReviewListProps extends ResetAPI {
  list: ReviewDataType[];
}

interface OneReviewProps extends ResetAPI {
  list: ReviewDataType;
}

interface IconChipListProps {
  item: ReactionType[];
  myReaction: 'help' | 'interest' | 'like' | 'thumb' | 'angry' | null;
}

interface ReviewStoreProps {
  isOpen: boolean;
  state: 'review' | 'create' | 'fix' | 'mypage' | null;
  reviewId: number | null;
  reviewState: ReviewStateType;
  onReview: (reviewId: number) => void;
  onMyPage: () => void;
  setFixMode: (reviewState: ReviewStateType) => void;
  setCreateMode: () => void;
  closeMode: () => void;
  reset: () => void;
}

interface ReviewRegisterModalProps {
  isOpen: boolean;
}

interface IconChipListProps {
  item: ReactionType[];
}

interface ReviewModalContainerProps extends OpenPosition {
  isMyPage: boolean;
}

export type {
  ReviewProps,
  ReviewRegisterProps,
  FirstReviewModalProps,
  ReviewListProps,
  RadioGroupRatingProps,
  IconChipListProps,
  OneReviewProps,
  ReviewDataType,
  ReviewStoreProps,
  ReviewRegisterModalProps,
  ReviewModalContainerProps,
};
