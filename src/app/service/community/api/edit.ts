import CustomError from '@/error/CustomError';
import { axiosInstance } from '@/lib/axios/axios-instance';
import { END_POINT } from '@/constants/api/end-point';
import type { PostDataProps } from '@/types/community/post';

interface EditPostType extends PostDataProps {
  id: number;
}

const editPost = async (data: EditPostType) => {
  try {
    await axiosInstance.patch(END_POINT.post.default, data);
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      throw new Error(error.message);
    }

    throw new Error(error as any);
  }
};

export default editPost;
