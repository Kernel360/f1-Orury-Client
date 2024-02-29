import { END_POINT } from '@/constants/api/end-point';
import TABS from '@/constants/community/tabs';
import { TResponse } from '@/types/common/response';
import { CommentListData } from '@/types/community/comment';
import { PostListData } from '@/types/community/post';
import { AxiosResponse } from 'axios';

export const getUserPostListKey = (
  pageIndex: number,
  type: 'post' | 'comment',
  previousPageData?: AxiosResponse<TResponse<PostListData>>,
) => {
  if (previousPageData && previousPageData.data.data.cursor === -1) return null;

  if (type === 'post') {
    if (!previousPageData && pageIndex === 0) {
      return END_POINT.userController.getMyPosts(0);
    }

    return END_POINT.userController.getMyPosts(
      previousPageData?.data.data.cursor,
    );
  }

  if (type === 'comment') {
    if (!previousPageData && pageIndex === 0) {
      return END_POINT.userController.getMyComments(0);
    }
  }

  return END_POINT.userController.getMyComments(
    previousPageData?.data.data.cursor,
  );
};

export const getSearchPostListKey = (
  searchText: string,
  pageIndex: number,
  previousPageData: AxiosResponse<TResponse<PostListData>>,
) => {
  if (previousPageData && previousPageData.data.data.cursor === -1) return null;

  if (!previousPageData && pageIndex === 0) {
    return END_POINT.postController.getSearchList(searchText, 0);
  }

  return END_POINT.postController.getSearchList(
    searchText,
    previousPageData.data.data.cursor,
  );
};

export const getCommentKey = (
  postId: number,
  pageIndex: number,
  previousPageData?: AxiosResponse<TResponse<CommentListData>>,
  cursor?: number,
): string => {
  if (previousPageData && previousPageData.data.data.cursor === -1) return '';
  if (!previousPageData && pageIndex === 0) {
    return END_POINT.commentController.getComment(postId, 0);
  }

  const currentCursor = cursor || previousPageData?.data.data.cursor;

  return END_POINT.commentController.getComment(postId, currentCursor);
};

export const getPostListKey = (
  categoryId: number,
  pageIndex: number,
  previousPageData?: AxiosResponse<TResponse<PostListData>>,
) => {
  if (previousPageData && previousPageData.data.data.cursor === -1) return null;

  if (
    previousPageData &&
    categoryId === TABS.hot.id &&
    previousPageData.data.data.next_page === -1
  ) {
    return null;
  }

  if (!previousPageData && categoryId === TABS.hot.id) {
    return END_POINT.postController.getHotPostList(0);
  }

  if (!previousPageData && pageIndex === 0) {
    return END_POINT.postController.getPostList(categoryId, 0);
  }

  if (categoryId === 3) {
    return END_POINT.postController.getHotPostList(
      previousPageData?.data.data.next_page,
    );
  }

  return END_POINT.postController.getPostList(
    categoryId,
    previousPageData?.data.data.cursor as number,
  );
};
