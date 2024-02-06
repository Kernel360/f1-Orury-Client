import { END_POINT } from '@/constants/api/end-point';
import { axiosInstance } from '@/lib/axios/axios-instance';

const reviewApi = {
  postReview: async (formData: FormData) =>
    axiosInstance.post(END_POINT.reviews.default, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }),
  patchReview: async (reviewId: number, formData: FormData) =>
    axiosInstance.patch(END_POINT.reviews.patchReview(reviewId), formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }),
  deleteReview: async (reviewId: number) =>
    axiosInstance.delete(END_POINT.reviews.deleteReview(reviewId)),
};

export default reviewApi;
