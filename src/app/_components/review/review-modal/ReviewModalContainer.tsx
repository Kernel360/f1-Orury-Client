import { ReviewModalContainerProps } from '@/types/review/ReviewProps';
import useReviewStore from '@/store/review/reviewStore';
import ReviewModal from './ReviewModal';
import MyReviewModal from './MyReviewModal';
import ReviewModalSkeleton from './ReviwModalSkeleton';

function ReviewModalContainer({
  isMyPage,
  openPosition,
}: ReviewModalContainerProps) {
  const { reviewId, isOpen } = useReviewStore(state => state);

  if (!isMyPage && reviewId === null) {
    return <ReviewModalSkeleton openPosition={openPosition} />;
  }

  if (!isOpen) return null;

  if (isMyPage) {
    return <MyReviewModal openPosition={openPosition} />;
  }
  return <ReviewModal openPosition={openPosition} />;
}

export default ReviewModalContainer;
