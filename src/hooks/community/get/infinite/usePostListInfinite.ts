import { getPostListKey } from '@/utils/getKeys';
import { getFetcher } from '@/utils/fetcher';

import useSWRInfinite from 'swr/infinite';

function usePostListInfinite(categoryId: number) {
  return useSWRInfinite(
    (pageIndex, previousPageData) =>
      getPostListKey(categoryId, pageIndex, previousPageData),
    getFetcher,
    { revalidateFirstPage: false },
  );
}

export default usePostListInfinite;
