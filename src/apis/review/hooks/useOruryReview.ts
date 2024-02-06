import useSWRInfinite, {SWRInfiniteResponse} from 'swr/infinite';
import { ReviewResponseType } from '@/types/map/review';
import {getMyReviewKey, getReviewKey} from "@/apis/review/getKeys";
import {axiosInstance} from "@/lib/axios/axios-instance";
import {SWRInfinityWithData, SWRResponseWithData} from "@/types/map/map";

const useOruryReview = {
  getMyReviews: (cursor = 0) => {
    return useSWRInfinite<SWRInfinityWithData<SWRResponseWithData<ReviewResponseType>>>(
        (pageIndex, previousPageData) =>
            getMyReviewKey(pageIndex, previousPageData, cursor),
        axiosInstance.get,
        {
          revalidateFirstPage: false,
        },
    );
  },
  getReviews: (reviewId: number, cursor = 0) => {
    return useSWRInfinite<SWRInfinityWithData<SWRResponseWithData<ReviewResponseType>>>(
      (pageIndex, previousPageData) =>
          getReviewKey(reviewId, pageIndex, previousPageData, cursor),
        axiosInstance.get,
      {
        revalidateFirstPage: false,
      },
    );
  },
};

export default useOruryReview;
