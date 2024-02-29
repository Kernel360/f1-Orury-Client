import { TResponse } from '@/types/common/response';
import { axiosInstance } from '@/lib/axios/axios-instance';
import { getUserPostListKey } from '@/utils/getKeys';
import type { MyPostListData } from '@/types/community/post';

import useSWRInfinite from 'swr/infinite';

function useUserPostListInfinite(state: 'post' | 'comment') {
  return useSWRInfinite<TResponse<MyPostListData>>(
    (pageIndex, previousPageData) =>
      getUserPostListKey(pageIndex, state, previousPageData),
    axiosInstance.get,
    { revalidateFirstPage: false },
  );
}

export default useUserPostListInfinite;
