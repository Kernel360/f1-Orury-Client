import { axiosInstance } from '@/lib/axios/axios-instance';
import { END_POINT } from '@/constants/api/end-point';
import { TResponse } from '@/types/common/response';
import { GetUserInfoProps, UserInfoProps } from '@/types/sign-in';

import CustomError from '@/error/CustomError';

const getUserInfo = async ({ code, signUpType }: GetUserInfoProps) => {
  try {
    const { data: response } = await axiosInstance.post<
      TResponse<UserInfoProps>
    >(
      END_POINT.auth.kakao,
      {
        code,
        sign_up_type: signUpType,
      },
      {
        useAuth: false,
      },
    );

    return response;
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      throw new Error(error.message);
    }
  }
};

export default getUserInfo;
