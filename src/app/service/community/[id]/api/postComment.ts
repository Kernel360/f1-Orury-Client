import CustomError from '@/error/CustomError';
import { axiosInstance } from '@/lib/axios/axios-instance';
import { END_POINT } from '@/constants/api/end-point';

type PostCommentType = {
  content: string;
  parent_id: number;
  post_id: number;
};

const postComment = async ({
  content,
  parent_id,
  post_id,
}: PostCommentType) => {
  try {
    await axiosInstance.post(END_POINT.comment.default, {
      content,
      parent_id,
      post_id,
    });
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      throw new Error(error.message);
    }
  }
};

export default postComment;
