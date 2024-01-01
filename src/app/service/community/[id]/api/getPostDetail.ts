import CustomError from '@/error/CustomError';
import { axiosInstance } from '@/lib/axios/axios-instance';
import { END_POINT } from '@/constants/api/end-point';

const getPostDetail = async (id: string) => {
  try {
    const { data: postDetail } = await axiosInstance<PostDetailProps>(
      END_POINT.post(id),
    );
    return postDetail;
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      throw new Error(error.message);
    }

    throw new Error('something went to wrong');
  }
};

export default getPostDetail;
