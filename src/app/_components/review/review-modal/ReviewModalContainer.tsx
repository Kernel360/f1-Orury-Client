import { ReviewModalContainerProps } from '@/types/map/ReviewProps';
import useReviewStore from '@/store/review/reviewStore';
import { useEffect } from 'react';
import ReviewModal from './ReviewModal';
import MyReviewModal from './MyReviewModal';
import ReviewModalSkeleton from './ReviwModalSkeleton';

function ReviewModalContainer({
  isMyPage,
  openPosition,
}: ReviewModalContainerProps) {
  const { reviewId, state } = useReviewStore(state => state);
  useEffect(() => {}, [reviewId, state]);
  if (!isMyPage && reviewId === null) {
    return <ReviewModalSkeleton openPosition={openPosition} />;
  }

  if (isMyPage) {
    return <MyReviewModal openPosition={openPosition} />;
  }
  return <ReviewModal openPosition={openPosition} />;
}

export default ReviewModalContainer;
