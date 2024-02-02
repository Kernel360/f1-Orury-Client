import { fetcher } from '@/utils/fetcher';
import useSWRInfinite from 'swr/infinite';
import { ReviewResponseType } from '@/types/map/review';

const useOruryReview = {
  getReviews: (reviewId: string, cursor?: number) => {
    return useSWRInfinite<ReviewResponseType>(
      (pageIndex, previousPageData) =>
        // getReviewKey(reviewId, pageIndex, previousPageData, cursor),
        fetcher,
      {
        revalidateFirstPage: false,
      },
    );
  },
};

export default useOruryReview;
