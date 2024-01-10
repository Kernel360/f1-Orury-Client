import type { ReactionType, ReviewDataType } from '@/types/map/review';

interface ReviewProps {
  position: 'center' | 'right';
  isOpen: boolean;
  onCloseModal: () => void;
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
}

interface ReviewStoreProps {
  isOpen: boolean;
  state: 'create' | 'fix';
  reviewId: number | null;
  setCreateMode: () => void;
  setFixMode: (reviewId: number) => void;
  reset: () => void;
}

interface ReviewRegisterModalProps {
  isOpen: boolean;
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
