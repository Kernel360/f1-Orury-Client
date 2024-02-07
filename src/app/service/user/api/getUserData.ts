import { END_POINT } from '@/constants/api/end-point';
import CustomError from '@/error/CustomError';
import { axiosInstance } from '@/lib/axios/axios-instance';
import { TResponse } from '@/types/common/response';
import { UserProps } from '@/types/user';

export const getUserData = async () => {
  try {
    const { data: userData } = await axiosInstance<TResponse<UserProps>>(
      END_POINT.userController.main,
    );

    return userData.data;
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      throw new Error(error.message);
    }
    throw new Error(String(error));
  }
};
