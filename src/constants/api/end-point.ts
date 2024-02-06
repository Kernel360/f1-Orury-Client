import { CenterType } from '@/types/map/map';

export const END_POINT = {
  auth: {
    // DEFAULT
    main: '/auth',

    // POST
    refresh: '/auth/refresh',

    // KAKAO
    kakao: '/auth/login',

    signUp: '/auth/sign-up',
  },
  postController: {
    // DEFAULT
    main: '/posts',

    // POST: 게시글 좋아요
    likePost: (postId: number) => `/posts/like/${postId}`,

    // GET: 게시글 상세 조회
    getPostDetail: (postId: number) => `/posts/${postId}`,

    // GET: 인기 게시물 목록 조회
    getHotPostList: (page?: number) => {
      const url = new URLSearchParams();

      url.append('page', String(page));

      return `${END_POINT.postController.main}/hot?${url}`;
    },

    // GET: 게시글 카테고리별 목록 조회
    getPostList: (category: number, cursor?: number) => {
      const url = new URLSearchParams();

      url.append('cursor', String(cursor));

      return `${END_POINT.postController.main}/category/${category}?${url}`;
    },

    // GET: 게시물 검색 결과 조회
    getSearchList: (searchWord: string, cursor: number) => {
      const url = new URLSearchParams();

      url.append('searchWord', String(searchWord));
      url.append('cursor', String(cursor));

      return `${END_POINT.postController.main}?${url}`;
    },

    // DELETE: 게시글 삭제
    deletePost: (postId: number) => `/posts/${postId}`,
  },

  commentController: {
    // DEFAULT
    main: '/comments',

    // POST: 댓글 좋아요
    likeComment: (commentId: number) => `/comments/like/${commentId}`,

    // GET: 댓글 목록 조회
    getComment: (postId: number, cursor?: number) => {
      const url = new URLSearchParams();

      url.append('cursor', String(cursor));

      return `${END_POINT.commentController.main}/${postId}?${url}`;
    },

    // DELETE: 댓글 삭제
    deleteComment: (commentId: number) => `/comments/${commentId}`,
  },
  mypage: {
    // DEFAULT
    default: '/user',

    // GET
    getReviews: (cursor: number) =>
      `${END_POINT.mypage.default}/reviews?cursor=${cursor}`,
    getPosts: (cursor: number) =>
      `${END_POINT.mypage.default}/posts?cursor=${cursor}`,
    getComments: (cursor: number) =>
      `${END_POINT.mypage.default}/comments?cursor=${cursor}`,
  },
  map: {
    // DEFAULT
    main: '/map',
    // GET
    search: (keyword: string) => `/keyword?keyword=${keyword}`,
    detail: (detailId: string) => `/map/detail?detailId=${detailId}`,
  },
  reviewsController: {
    // DEFAULT
    default: '/reviews',
    // GET
    getReviews: (reviewId: number, cursor: number) => {
      const url = new URLSearchParams();
      url.append('cursor', String(cursor));
      return `${END_POINT.reviewsController.default}/gym/${reviewId}?${url.toString()}`;
    },
    getDetailReview: (reviewId: number) => {
      return `${END_POINT.reviewsController.default}/${reviewId}`;
    },
    // DELETE
    deleteReview: (deleteReviewId: number) => {
      return `${END_POINT.reviewsController.default}/${deleteReviewId}`;
    },
    // PATCH
    patchReview: (deleteReviewId: number) => {
      return `${END_POINT.reviewsController.default}/${deleteReviewId}`;
    },
  },
  gymController: {
    // DEFAULT
    default: '/gyms',
    // GET
    searchList: (position: CenterType, keyword: string) => {
      const url = new URLSearchParams();

      const { lat, lng } = position;

      url.append('search_word', keyword);
      url.append('latitude', String(lat));
      url.append('longitude', String(lng));

      return `${END_POINT.gymController.default}/search?${url.toString()}`;
    },
    detail: (detailId: string) =>
      `${END_POINT.gymController.default}/${detailId}`,
  },
};
