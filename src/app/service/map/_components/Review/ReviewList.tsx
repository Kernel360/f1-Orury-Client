import type { ReviewListProps } from '@/types/map/ReviewProps';
import OneReview from '@/app/service/map/_components/Review/OneReview';

function ReviewList({ list, handleImageOpen }: ReviewListProps) {
  return (
    <div className="mt-[3.5rem]">
      {list.map(item => (
        <OneReview
          key={item.id}
          handleImageOpen={handleImageOpen}
          item={item}
        />
      ))}
    </div>
  );
}
export default ReviewList;
