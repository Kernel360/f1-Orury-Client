import CustomError from '@/error/CustomError';
import { axiosInstance } from '@/lib/axios/axios-instance';
import { END_POINT } from '@/constants/api/end-point';

const deletePostLike = async ({ post_id }: { post_id: number }) => {
  try {
    await axiosInstance.delete(END_POINT.post.likePost(post_id));
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      throw new Error(error.message);
    }
  }
};

export default deletePostLike;
