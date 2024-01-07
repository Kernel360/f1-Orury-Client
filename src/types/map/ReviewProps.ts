import type { ReactionType, ReviewDataType } from '@/types/map/review';
import type { Dispatch, SetStateAction } from 'react';

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
  handlePoint: Dispatch<SetStateAction<number>>;
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
};
