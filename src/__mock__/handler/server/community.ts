import { http, HttpHandler, HttpResponse } from 'msw';
import { END_POINT } from '@/constants/api/end-point';
import { BACK_URL } from '@/constants/api';
import { postsMock } from '@/__mock__/data/posts.mock';
import { postMock } from '@/__mock__/data/post.mock';

const communityHandler: HttpHandler[] = [
  //   getPosts
  http.get(BACK_URL + END_POINT.posts(1), () => {
    return HttpResponse.json(postsMock);
  }),

  //   getPostDetail
  http.get(BACK_URL + END_POINT.post(43), () => {
    return HttpResponse.json(postMock);
  }),
];

export default communityHandler;
