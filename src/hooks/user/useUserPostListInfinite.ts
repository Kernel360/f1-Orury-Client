import { TResponse } from '@/types/common/response';
import { getFetcher } from '@/utils/fetcher';
import { getUserPostListKey } from '@/utils/getKeys';
import type { MyPostListData } from '@/types/community/post';

import useSWRInfinite from 'swr/infinite';

function useUserPostListInfinite(state: 'post' | 'comment') {
  return useSWRInfinite<TResponse<MyPostListData>>(
    (pageIndex, previousPageData) =>
      getUserPostListKey(pageIndex, state, previousPageData),
    getFetcher,
    { revalidateFirstPage: false },
  );
}

export default useUserPostListInfinite;
