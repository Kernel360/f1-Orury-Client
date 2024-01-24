import CustomError from '@/error/CustomError';
import { axiosInstance } from '@/lib/axios/axios-instance';
import { END_POINT } from '@/constants/api/end-point';
import type { EditProfileProps } from '@/types/my-page';

const editPost = async (data: EditProfileProps) => {
  try {
    await axiosInstance.patch(END_POINT.mypage.main, data);
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      throw new Error(error.message);
    }
  }
};

export default editPost;
