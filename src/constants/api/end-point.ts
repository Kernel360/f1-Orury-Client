export const END_POINT = {
  auth: {
    // DEFAULT
    main: '/auth',

    // POST
    refresh: '/auth/refresh',

    // KAKAO
    kakao: 'auth/login',
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
      `/posts/${category}?cursor=${cursor}`,
    getSearchList: (searchWord: string, cursor: number) =>
      `/posts?searchWord=${searchWord}&cursor=${cursor}`,

    // DELETE
    deletePost: (postId: number) => `/post/${postId}`,
  },
  comment: {
    // DEFAULT
    main: '/comment',

    // POST
    likeComment: (commentId: number) => `/comment/like/${commentId}`,

    // GET
    getComment: (postId: number, cursor?: number) =>
      `/comments/${postId}?cursor=${cursor}`,

    // DELETE
    deleteComment: (commentId: number) => `/comment/${commentId}`,
  },
  mypage: {
    // DEFAULT
    main: '/mypage',
  },
};
