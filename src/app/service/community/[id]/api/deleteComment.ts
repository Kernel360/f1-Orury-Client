import CustomError from '@/error/CustomError';
import { axiosInstance } from '@/lib/axios/axios-instance';
import { END_POINT } from '@/constants/api/end-point';

const deleteComment = async ({ commentId }: { commentId: number }) => {
  try {
    await axiosInstance.delete(
      END_POINT.commentController.deleteComment(commentId),
    );
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      throw new Error(error.message);
    }
  }
};

export default deleteComment;
