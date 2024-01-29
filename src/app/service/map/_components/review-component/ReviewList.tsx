import type { ReviewListProps } from '@/types/map/ReviewProps';
import OneReview from '@/app/service/map/_components/review-modal/OneReview';

function ReviewList({ list, handleImageOpen }: ReviewListProps) {
  return (
    <>
      {list.map(item => (
        <OneReview
          key={item.id}
          handleImageOpen={handleImageOpen}
          item={item}
        />
      ))}
    </>
  );
}
export default ReviewList;
