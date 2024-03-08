import CustomError from '@/error/CustomError';
import { axiosInstance } from '@/lib/axios/axios-instance';
import { END_POINT } from '@/constants/api/end-point';

const postPostLike = async ({ post_id }: { post_id: number }) => {
  try {
    await axiosInstance.post(END_POINT.postController.likePost(post_id));
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      throw new Error(error.message);
    }
  }
};

export default postPostLike;
