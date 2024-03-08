import useSWRInfinite from 'swr/infinite';

import { axiosInstance } from '@/lib/axios/axios-instance';
import { AxiosResponse } from 'axios';
import { TResponse } from '@/types/common/response';
import {
  getPostListKey,
  getSearchPostListKey,
  getUserPostListKey,
} from '@/utils/getKeys';
import type { PostListData, MyPostListData } from '@/types/community/post';

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

  useGetMyPostList: (state: 'post' | 'comment') =>
    useSWRInfinite<AxiosResponse<TResponse<MyPostListData>>>(
      (pageIndex, previousPageData) =>
        getUserPostListKey(pageIndex, state, previousPageData),
      axiosInstance.get,
      { revalidateFirstPage: false },
    ),
};

export default usePostListApi;
