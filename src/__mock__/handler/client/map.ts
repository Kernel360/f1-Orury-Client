// import { delay, http, HttpHandler, HttpResponse } from 'msw';
// import { END_POINT } from '@/constants/api/end-point';
// import { BACK_URL } from '@/constants/api';
// import { detailMarkerMock, searchMock } from '@/__mock__/data/map.mock';

// const mapHandler: HttpHandler[] = [
//   http.get(BACK_URL + '/keyword', async ({ request }) => {
//     const url = new URL(request.url);
//     const keyword = url.searchParams.get('keyword');
//     let newMock = searchMock;
//     if (keyword != null) {
//       newMock.keyword = keyword;
//     }
//     newMock = {
//       ...newMock,
//       item: searchMock.item.map(val => {
//         return { ...val, title: newMock.keyword + val.title };
//       }),
//     };
//     await delay(500);
//     return HttpResponse.json(newMock);
//   }),
//   http.get(BACK_URL + END_POINT.map.main + '/detail', async ({ request }) => {
//     const url = new URL(request.url);
//     const keyword = url.searchParams.get('keyword');
//     let newMock = searchMock;
//     if (keyword != null) {
//       newMock.keyword = keyword;
//     }
//     newMock = {
//       ...newMock,
//       item: searchMock.item.map(val => {
//         return { ...val, title: newMock.keyword + val.title };
//       }),
//     };
//     await delay(500);
//     return HttpResponse.json(detailMarkerMock);
//   }),
// ];

// export default mapHandler;
