import { ReviewDataType } from '@/types/map/review';
import { Dispatch, SetStateAction } from 'react';

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

export type {
  ReviewProps,
  FirstReviewModalProps,
  ReviewListProps,
  RadioGroupRatingProps,
};
