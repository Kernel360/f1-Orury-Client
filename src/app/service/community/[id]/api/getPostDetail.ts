import { axiosInstance } from '@/lib/axios/axios-instance';
import { END_POINT } from '@/constants/api/end-point';
import { TResponse } from '@/types/common/response';
import { PostDetailProps } from '@/types/community/post';

import CustomError from '@/error/CustomError';

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
