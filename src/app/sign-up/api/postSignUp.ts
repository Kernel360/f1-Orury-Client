import CustomError from '@/error/CustomError';
import { axiosInstance } from '@/lib/axios/axios-instance';
import { END_POINT } from '@/constants/api/end-point';
import { PostSignUpProps } from '@/types/sign-up';
import { TResponse } from '@/types/common/response';
import { UserInfoProps } from '@/types/sign-in';

const postSignUp = async ({ ...data }: PostSignUpProps) => {
  try {
    const { data: response } = await axiosInstance.post<
      TResponse<UserInfoProps>
    >(END_POINT.auth.signUp, {
      ...data,
    });
    return response;
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      throw new Error(error.message);
    }
  }
};

export default postSignUp;
