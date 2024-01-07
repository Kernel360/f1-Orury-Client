import CustomError from '@/error/CustomError';
import { PostsProps } from '@/types/community/posts';
import { axiosInstance } from '@/lib/axios/axios-instance';
import { END_POINT } from '@/constants/api/end-point';

const getPosts = async (id: number) => {
  try {
    const { data: posts } = await axiosInstance.get<PostsProps[]>(
      END_POINT.posts(id),
    );
    return posts;
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      throw new Error(error.message);
    }
    throw new Error(error as any);
  }
};

export default getPosts;
