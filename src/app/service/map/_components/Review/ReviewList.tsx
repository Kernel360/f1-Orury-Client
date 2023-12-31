import type { ReviewListProps } from '@/types/map/ReviewProps';
import OneReview from '@/app/service/map/_components/Review/OneReview';

function ReviewList({ list }: ReviewListProps) {
  return (
    <div>
      {list.map(item => (
        <OneReview key={item.id} {...item} />
      ))}
    </div>
  );
}
export default ReviewList;
