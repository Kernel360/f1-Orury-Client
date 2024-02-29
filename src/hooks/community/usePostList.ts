import { getPostListKey, getSearchPostListKey } from '@/utils/getKeys';

import useSWRInfinite from 'swr/infinite';
import { axiosInstance } from '@/lib/axios/axios-instance';
import { PostListData } from '@/types/community/post';
import { AxiosResponse } from 'axios';
import { TResponse } from '@/types/common/response';

const usePostListApi = {
  useGetPostList: (categoryId: number) =>
    useSWRInfinite<AxiosResponse<TResponse<PostListData>>>(
      (pageIndex, previousPageData) =>
        getPostListKey(categoryId, pageIndex, previousPageData),
      axiosInstance.get,
      { revalidateFirstPage: false },
    ),
  useGetSearchPostList: (searchText: string) =>
    useSWRInfinite<AxiosResponse<TResponse<PostListData>>>(
      (pageIndex, previousPageData) =>
        getSearchPostListKey(searchText, pageIndex, previousPageData),
      axiosInstance.get,
      { revalidateFirstPage: false },
    ),
};

export default usePostListApi;
