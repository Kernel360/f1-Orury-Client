import CustomError from '@/error/CustomError';
import { axiosInstance } from '@/lib/axios/axios-instance';
import { END_POINT } from '@/constants/api/end-point';
import { PostSignUpProps } from '@/types/sign-up';

const postSignUp = async ({ ...data }: PostSignUpProps) => {
  try {
    await axiosInstance.post(END_POINT.auth.signUp, {
      ...data,
    });
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      throw new Error(error.message);
    }
  }
};

export default postSignUp;
