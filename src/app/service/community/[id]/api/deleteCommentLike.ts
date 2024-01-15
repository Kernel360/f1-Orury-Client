import CustomError from '@/error/CustomError';
import { axiosInstance } from '@/lib/axios/axios-instance';
import { END_POINT } from '@/constants/api/end-point';

const deleteCommentLike = async ({ comment_id }: { comment_id: number }) => {
  try {
    await axiosInstance.delete(END_POINT.comment.likeComment(comment_id));
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      throw new Error(error.message);
    }
  }
};

export default deleteCommentLike;
