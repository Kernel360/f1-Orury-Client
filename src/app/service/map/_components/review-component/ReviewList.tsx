import type { ReviewListProps } from '@/types/map/ReviewProps';
import OneReview from '@/app/service/map/_components/review-modal/OneReview';

function ReviewList({ list }: ReviewListProps) {
  console.log(list);
  return (
    <>
      {list.map(data => {
        {
          console.log(data);
          return <OneReview key={data.id} data={data} />;
        }
      })}
    </>
  );
}
export default ReviewList;
