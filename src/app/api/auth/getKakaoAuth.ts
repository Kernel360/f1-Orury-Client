import { axiosInstance } from '@/lib/axios/axios-instance';
import { END_POINT } from '@/constants/api/end-point';

import CustomError from '@/error/CustomError';

const getKakaoAuth = async () => {
  try {
    await axiosInstance(END_POINT.auth.kakao);
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      throw new Error(error.message);
    }
  }
};

export default getKakaoAuth;
