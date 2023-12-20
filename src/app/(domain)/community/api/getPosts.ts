import CustomError from '@/error/CustomError';
import PostsProps from '@/types/community/posts';
import { axiosInstance } from '@/lib/axios/axios-instance';
import { END_POINT } from '@/constants/api/end-point';

const getPosts = async () => {
  try {
    const { data: posts } = await axiosInstance.get<PostsProps[]>(END_POINT.post);
    return posts;
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      throw new Error(error.message);
    }
    throw new Error('something went to wrong');
  }
};

export default getPosts;
