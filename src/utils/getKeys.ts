import { BACK_URL } from '@/constants/api';
import { END_POINT } from '@/constants/api/end-point';
import TABS from '@/constants/community/tabs';
import { TResponse } from '@/types/common/response';
import { CommentListData } from '@/types/community/comment';
import { PostListData } from '@/types/community/post';

export const getSearchPostListKey = (
  searchText: string,
  pageIndex: number,
  previousPageData: TResponse<PostListData>,
) => {
  if (previousPageData && previousPageData.data.cursor === -1) return null;

  if (!previousPageData && pageIndex === 0) {
    return BACK_URL + END_POINT.postController.getSearchList(searchText, 0);
  }

  return (
    BACK_URL +
    END_POINT.postController.getSearchList(
      searchText,
      previousPageData.data.cursor,
    )
  );
};

export const getCommentKey = (
  postId: number,
  pageIndex: number,
  previousPageData?: TResponse<CommentListData>,
  cursor?: number,
): string => {
  if (previousPageData && previousPageData.data.cursor === -1) return '';
  if (!previousPageData && pageIndex === 0) {
    return BACK_URL + END_POINT.commentController.getComment(postId, 0);
  }

  const currentCursor = cursor || previousPageData?.data.cursor;

  return (
    BACK_URL + END_POINT.commentController.getComment(postId, currentCursor)
  );
};

export const getPostListKey = (
  categoryId: number,
  pageIndex: number,
  previousPageData?: TResponse<PostListData>,
) => {
  if (previousPageData && previousPageData.data.cursor === -1) return null;

  if (
    previousPageData &&
    categoryId === TABS.hot.id &&
    previousPageData.data.next_page === -1
  ) {
    return null;
  }

  if (!previousPageData && categoryId === TABS.hot.id) {
    return BACK_URL + END_POINT.postController.getHotPostList(0);
  }

  if (!previousPageData && pageIndex === 0) {
    return BACK_URL + END_POINT.postController.getPostList(categoryId, 0);
  }

  if (categoryId === 3) {
    return (
      BACK_URL +
      END_POINT.postController.getHotPostList(previousPageData?.data.next_page)
    );
  }

  return (
    BACK_URL +
    END_POINT.postController.getPostList(
      categoryId,
      previousPageData?.data.cursor,
    )
  );
};
