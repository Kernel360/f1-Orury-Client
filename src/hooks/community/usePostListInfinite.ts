import { getPostListKey } from '@/utils/getKeys';
import { fetcher } from '@/utils/fetcher';

import useSWRInfinite from 'swr/infinite';

function usePostListInfinite(categoryId: number) {
  return useSWRInfinite(
    (pageIndex, previousPageData) =>
      getPostListKey(categoryId, pageIndex, previousPageData),
    fetcher,
    { revalidateFirstPage: false },
  );
}

export default usePostListInfinite;
