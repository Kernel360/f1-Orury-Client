import { TResponse } from '@/types/common/response';
import { CommentListData } from '@/types/community/comment';
import { END_POINT } from '@/constants/api/end-point';

export const getMyReviewKey = (
  pageIndex: number,
  previousPageData?: TResponse<CommentListData>,
  cursor?: number,
): string => {
  if (previousPageData && previousPageData.data.cursor === -1) return '';
  if (!previousPageData && pageIndex === 0) {
    return END_POINT.mypage.getReviews(0);
  }

  const currentCursor = cursor || (previousPageData?.data.cursor as number);

  return END_POINT.mypage.getReviews(currentCursor);
};

export const getReviewKey = (
  postId: number | null,
  pageIndex: number,
  previousPageData?: TResponse<CommentListData>,
  cursor?: number,
): string => {
  if (postId === null) return '';
  if (previousPageData && previousPageData.data.cursor === -1) return '';
  if (!previousPageData && pageIndex === 0) {
    return END_POINT.reviewsController.getReviews(postId, 0);
  }

  const currentCursor = cursor || (previousPageData?.data.cursor as number);

  return END_POINT.reviewsController.getReviews(postId, currentCursor);
};
