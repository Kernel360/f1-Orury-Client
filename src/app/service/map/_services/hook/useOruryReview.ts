import useSWR from 'swr';
import { fetcher } from '@/utils/fetcher';
import { END_POINT } from '@/constants/api/end-point';
import useSWRInfinite from 'swr/infinite';
import { getReviewKey } from '@/utils/getKeys';
import { ReviewResponseType } from '@/types/map/review';

const useOruryReview = {
  getReviews: (reviewId: number, cursor?: number) => {
    return useSWRInfinite<ReviewResponseType>(
      (pageIndex, previousPageData) =>
        getReviewKey(reviewId, pageIndex, previousPageData, cursor),
      fetcher,
      {
        revalidateFirstPage: false,
      },
    );
  },
};

export default useOruryReview;
