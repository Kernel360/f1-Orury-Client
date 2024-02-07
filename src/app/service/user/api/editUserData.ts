import { END_POINT } from '@/constants/api/end-point';
import CustomError from '@/error/CustomError';
import { axiosInstance } from '@/lib/axios/axios-instance';
import { EditUserProps } from '@/types/user';

export const editUserData = async (data: EditUserProps) => {
  try {
    await axiosInstance.patch(END_POINT.userController.main, { ...data });
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      throw new Error(error.message);
    }
    throw new Error(String(error));
  }
};
