export const END_POINT = {
  auth: {
    // DEFAULT
    main: '/auth',

    // POST
    refresh: '/auth/refresh',

    // KAKAO
    kakao: 'auth/login',

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
    main: '/mypage',
  },
};
