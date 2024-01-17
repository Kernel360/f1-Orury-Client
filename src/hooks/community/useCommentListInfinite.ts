import { getCommentKey } from '@/utils/getKeys';
import { fetcher } from '@/utils/fetcher';
import { CommentListData } from '@/types/community/comment';
import { TResponse } from '@/types/common/response';

import useSWRInfinite from 'swr/infinite';

function useCommentListInfinite(postId?: number) {
  return useSWRInfinite<TResponse<CommentListData>>(
    (pageIndex, previousPageData) => {
      if (postId) {
        return getCommentKey(postId, pageIndex, previousPageData);
      }
    },
    fetcher,
    {
      revalidateFirstPage: false,
    },
  );
}

export default useCommentListInfinite;
