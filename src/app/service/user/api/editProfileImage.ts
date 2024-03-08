import { END_POINT } from '@/constants/api/end-point';
import CustomError from '@/error/CustomError';
import { axiosInstance } from '@/lib/axios/axios-instance';
import { TResponse } from '@/types/common/response';

export const editProfileImage = async (formData?: FormData) => {
  try {
    if (formData) {
      const { data: response } = await axiosInstance.post<TResponse<null>>(
        END_POINT.userController.profileImage,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      return response.message;
    }

    const { data: response } = await axiosInstance.post<TResponse<null>>(
      END_POINT.userController.profileImage,
      { image: '' },
    );

    return response.message;
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      throw new Error(error.message);
    }
    throw new Error(String(error));
  }
};
