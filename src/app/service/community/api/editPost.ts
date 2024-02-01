import CustomError from '@/error/CustomError';
import { axiosInstance } from '@/lib/axios/axios-instance';
import { END_POINT } from '@/constants/api/end-point';

const editPost = async (formData: FormData) => {
  try {
    await axiosInstance.patch(END_POINT.post.main, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      throw new Error(error.message);
    }

    throw new Error(error as any);
  }
};

export default editPost;
