import CustomError from '@/error/CustomError';
import { axiosInstance } from '@/lib/axios/axios-instance';
import { END_POINT } from '@/constants/api/end-point';

type EditCommentType = {
  id: number;
  content: string;
};

const editComment = async ({ id, content }: EditCommentType) => {
  try {
    await axiosInstance.patch(END_POINT.comment.main, {
      id,
      content,
    });
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      throw new Error(error.message);
    }
  }
};

export default editComment;
