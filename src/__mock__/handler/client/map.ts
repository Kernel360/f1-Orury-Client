import { http, HttpHandler, HttpResponse } from 'msw';
import { END_POINT } from '@/constants/api/end-point';
import { BACK_URL } from '@/constants/api';
import { searchMock } from '@/__mock__/data/map.mock';

const mapHandler: HttpHandler[] = [
  http.get(BACK_URL + END_POINT.map.main, ({ request }) => {
    const url = new URL(request.url);
    const keyword = url.searchParams.get('keyword');
    let newMock = searchMock;
    if (keyword != null) {
      newMock.keyword = keyword;
    }
    newMock = {
      ...newMock,
      item: searchMock.item.map(val => {
        return { ...val, title: newMock.keyword + val.title };
      }),
    };
    return HttpResponse.json(newMock);
  }),
];

export default mapHandler;
