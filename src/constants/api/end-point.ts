export const END_POINT = {
  auth: {
    // DEFAULT
    main: '/auth',

    // POST
    refresh: '/auth/refresh',
  },
  post: {
    // DEFAULT
    main: '/post',

    // POST
    likePost: (postId: number) => `/post/like/${postId}`,

    // GET
    getPostDetail: (postId: number) => `/post/${postId}`,
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
};
