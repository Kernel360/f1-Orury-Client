import type { ReviewListProps } from '@/types/map/ReviewProps';
import OneReview from '@/app/_components/review/review-modal/OneReview';
import { v4 } from 'uuid';

function ReviewList({ list, mutate }: ReviewListProps) {
  return (
    <>
      {list.map(data => (
        <OneReview mutate={mutate} key={v4()} list={data} />
      ))}
    </>
  );
}
export default ReviewList;
