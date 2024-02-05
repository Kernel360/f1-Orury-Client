import { TResponse } from '@/types/common/response';
import { PostListData } from '@/types/community/post';
import { fetcher } from '@/utils/fetcher';
import { getSearchPostListKey } from '@/utils/getKeys';

import useSWRInfinite from 'swr/infinite';

function useSearchPostListInfinite(searchText: string) {
  return useSWRInfinite<TResponse<PostListData>>(
    (pageIndex, previousPageData) =>
      getSearchPostListKey(searchText, pageIndex, previousPageData),
    fetcher,
    { revalidateFirstPage: false },
  );
}

export default useSearchPostListInfinite;
