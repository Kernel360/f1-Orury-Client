import { ReviewDataType } from '@/types/map/review';

interface ReviewProps {
  position: 'center' | 'right';
  isOpen: boolean;
  onCloseModal: () => void;
}

interface FirstReviewModalProps {
  title: string;
  isFirst: boolean;
}

interface ReviewListProps {
  list: ReviewDataType[];
}

export type { ReviewProps, FirstReviewModalProps, ReviewListProps };
