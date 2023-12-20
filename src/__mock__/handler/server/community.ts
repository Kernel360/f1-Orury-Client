import { http, HttpHandler, HttpResponse } from 'msw';
import { END_POINT } from '@/constants/api/end-point';
import { BACK_URL } from '@/constants/api';
import { postsMock } from '@/__mock__/data/post.mock';

const communityHandler: HttpHandler[] = [
  //   getPosts
  http.get(BACK_URL + END_POINT.post, () => {
    return HttpResponse.json(postsMock);
  }),
];

export default communityHandler;
