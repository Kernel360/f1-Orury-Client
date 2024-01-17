import { getPostListKey } from '@/utils/getKeys';
import { fetcher } from '@/utils/fetcher';
import { PostListData } from '@/types/community/post';
import { TResponse } from '@/types/common/response';

import useSWRInfinite from 'swr/infinite';

function usePostListMutate(categoryId: number) {
  return useSWRInfinite<TResponse<PostListData>>(
    (pageIndex, previousPageData) =>
      getPostListKey(categoryId, pageIndex, previousPageData),
    fetcher,
    { revalidateFirstPage: false },
  );
}

export default usePostListMutate;
