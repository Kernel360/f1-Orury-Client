import { CenterType, PositionType } from '@/types/map/map';

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
  post: {
    // DEFAULT
    main: '/posts',

    // POST
    likePost: (postId: number) => `/posts/like/${postId}`,

    // GET
    getPostDetail: (postId: number) => `/posts/${postId}`,
    getHotPostList: (page?: number) => `/posts/hot?page=${page}`,
    getPostList: (category: number, cursor?: number) =>
      `/posts/category/${category}?cursor=${cursor}`,
    getSearchList: (searchWord: string, cursor: number) =>
      `/posts?searchWord=${searchWord}&cursor=${cursor}`,

    // DELETE
    deletePost: (postId: number) => `/posts/${postId}`,
  },
  comment: {
    // DEFAULT
    main: '/comments',

    // POST
    likeComment: (commentId: number) => `/comments/like/${commentId}`,

    // GET
    getComment: (postId: number, cursor?: number) =>
      `/comments/${postId}?cursor=${cursor}`,

    // DELETE
    deleteComment: (commentId: number) => `/comments/${commentId}`,
  },
  mypage: {
    // DEFAULT
    default: '/user',

    // GET
    getReviews: (cursor: number) => `${END_POINT.mypage.default}/reviews`,
    getPosts: (cursor: number) => `${END_POINT.mypage.default}/posts`,
    getComments: (cursor: number) => `${END_POINT.mypage.default}/comments`,
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
      let url = new URLSearchParams();
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
      let url = new URLSearchParams();

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
