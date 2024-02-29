import { getCommentKey } from '@/utils/getKeys';
import { axiosInstance } from '@/lib/axios/axios-instance';
import { CommentListData } from '@/types/community/comment';
import { TResponse } from '@/types/common/response';
import { AxiosResponse } from 'axios';

import useSWRInfinite from 'swr/infinite';

const useCommentListApi = {
  useGetCommentList: (postId?: number) =>
    useSWRInfinite<AxiosResponse<TResponse<CommentListData>>>(
      (pageIndex, previousPageData) => {
        if (postId) {
          return getCommentKey(postId, pageIndex, previousPageData);
        }
      },
      axiosInstance.get,
      {
        revalidateFirstPage: false,
      },
    ),
};

export default useCommentListApi;
