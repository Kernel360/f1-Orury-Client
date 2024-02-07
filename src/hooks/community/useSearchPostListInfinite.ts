import { PostListData } from '@/types/community/post';
import { fetcher } from '@/utils/fetcher';
import { getSearchPostListKey } from '@/utils/getKeys';
import { AxiosResponse } from 'axios';

import useSWRInfinite from 'swr/infinite';

function useSearchPostListInfinite(searchText: string) {
  return useSWRInfinite<AxiosResponse<PostListData>>(
    (pageIndex, previousPageData) =>
      getSearchPostListKey(searchText, pageIndex, previousPageData),
    fetcher,
    { revalidateFirstPage: false },
  );
}

export default useSearchPostListInfinite;
