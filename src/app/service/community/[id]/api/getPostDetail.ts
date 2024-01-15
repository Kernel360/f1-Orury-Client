import CustomError from '@/error/CustomError';
import { axiosInstance } from '@/lib/axios/axios-instance';
import { END_POINT } from '@/constants/api/end-point';
import { TResponse } from '@/types/common/response';

const getPostDetail = async (id: number) => {
  try {
    const { data: postDetail } = await axiosInstance<
      TResponse<PostDetailProps>
    >(END_POINT.post.getPostDetail(id));

    return postDetail.data;
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      throw new Error(error.message);
    }
  }
};

export default getPostDetail;
