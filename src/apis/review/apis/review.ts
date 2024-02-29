import { END_POINT } from '@/constants/api/end-point';
import { axiosInstance } from '@/lib/axios/axios-instance';

const reviewApi = {
  postReaction: (review_id: number, reaction_type: number) =>
    axiosInstance.post(END_POINT.reviewsController.reaction(review_id), {
      reaction_type,
    }),
  postReview: (formData: FormData) =>
    axiosInstance.post(END_POINT.reviewsController.default, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }),
  patchReview: (reviewId: number, formData: FormData) =>
    axiosInstance.patch(
      END_POINT.reviewsController.patchReview(reviewId),
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    ),
  deleteReview: async (reviewId: number) =>
    axiosInstance.delete(END_POINT.reviewsController.deleteReview(reviewId)),
};

export default reviewApi;
