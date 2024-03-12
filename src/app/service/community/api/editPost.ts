import { axiosInstance } from '@/lib/axios/axios-instance';
import { END_POINT } from '@/constants/api/end-point';
import { TResponse } from '@/types/common/response';

const editPost = async (formData: FormData) => {
  const { data: response } = await axiosInstance.patch<TResponse<null>>(
    END_POINT.postController.main,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  return response.message;
};

export default editPost;
