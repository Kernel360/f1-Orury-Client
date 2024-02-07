import { ReviewModalContainerProps } from '@/types/review/ReviewProps';
import useReviewStore from '@/store/review/reviewStore';
import ReviewModal from './ReviewModal';
import MyReviewModal from './MyReviewModal';
import ReviewModalSkeleton from './ReviwModalSkeleton';

function ReviewModalContainer({
  isMyPage,
  openPosition,
}: ReviewModalContainerProps) {
  const { reviewId } = useReviewStore(state => state);

  if (!isMyPage && reviewId === null) {
    return <ReviewModalSkeleton openPosition={openPosition} />;
  }

  if (isMyPage) {
    return <MyReviewModal openPosition={openPosition} />;
  }
  return <ReviewModal openPosition={openPosition} />;
}

export default ReviewModalContainer;
