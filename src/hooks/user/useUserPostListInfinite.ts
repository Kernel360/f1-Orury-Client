import { TResponse } from '@/types/common/response';
import { axiosInstance } from '@/lib/axios/axios-instance';
import { getUserPostListKey } from '@/utils/getKeys';
import type { MyPostListData } from '@/types/community/post';

import useSWRInfinite from 'swr/infinite';
import { AxiosResponse } from 'axios';

function useUserPostListInfinite(state: 'post' | 'comment') {
  return useSWRInfinite<AxiosResponse<TResponse<MyPostListData>>[]>(
    (pageIndex, previousPageData) =>
      getUserPostListKey(pageIndex, state, previousPageData),
    axiosInstance.get,
    { revalidateFirstPage: false },
  );
}

export default useUserPostListInfinite;
