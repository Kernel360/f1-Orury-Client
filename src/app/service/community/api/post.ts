import CustomError from '@/error/CustomError';
import { axiosInstance } from '@/lib/axios/axios-instance';
import { END_POINT } from '@/constants/api/end-point';
import type { PostDataProps } from '@/types/community/post';

const post = async (data: PostDataProps) => {
  try {
    await axiosInstance.post(END_POINT.post.main, data, {
      withCredentials: true,
    });
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      throw new Error(error.message);
    }

    throw new Error(error as any);
  }
};

export default post;
