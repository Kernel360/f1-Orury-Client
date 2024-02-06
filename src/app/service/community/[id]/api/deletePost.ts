import CustomError from '@/error/CustomError';
import { axiosInstance } from '@/lib/axios/axios-instance';
import { END_POINT } from '@/constants/api/end-point';
import { TResponse } from '@/types/common/response';

const deletePost = async ({ postId }: { postId: number }) => {
  try {
    const { data: response } = await axiosInstance.delete<TResponse<null>>(
      END_POINT.postController.deletePost(postId),
    );

    return response.message;
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      throw new Error(error.message);
    }
  }
};

export default deletePost;
