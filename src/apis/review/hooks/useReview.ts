import useSWRInfinite from 'swr/infinite';
import { ReviewResponseType } from '@/types/map/review';
import { getMyReviewKey, getReviewKey } from '@/apis/review/getKeys';
import { axiosInstance } from '@/lib/axios/axios-instance';
import { AxiosResponse } from 'axios';
import { TResponse } from '@/types/common/response';

const useReviewApi = {
  useGetMyReviews: (cursor?: number) =>
    useSWRInfinite<AxiosResponse<TResponse<ReviewResponseType>>[]>(
      (pageIndex, previousPageData) =>
        getMyReviewKey(pageIndex, previousPageData, cursor),
      axiosInstance.get,
      {
        revalidateFirstPage: false,
      },
    ),
  useGetReviews: (reviewId: number, cursor?: number) =>
    useSWRInfinite<AxiosResponse<TResponse<ReviewResponseType>>[]>(
      (pageIndex, previousPageData) =>
        getReviewKey(reviewId, pageIndex, previousPageData, cursor),
      axiosInstance.get,
      {
        revalidateFirstPage: false,
      },
    ),
};

export default useReviewApi;
