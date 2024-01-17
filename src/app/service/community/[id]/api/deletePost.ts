import CustomError from '@/error/CustomError';
import { axiosInstance } from '@/lib/axios/axios-instance';
import { END_POINT } from '@/constants/api/end-point';

const deletePost = async ({ postId }: { postId: number }) => {
  try {
    await axiosInstance.delete(END_POINT.post.deletePost(postId));
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      throw new Error(error.message);
    }
  }
};

export default deletePost;
