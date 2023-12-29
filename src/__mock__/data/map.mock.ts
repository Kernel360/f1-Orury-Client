import { DetailPlaceType, SearchKeywordListType } from '@/types/map/map';

export const searchMock: SearchKeywordListType = {
  item: [
    {
      id: 1,
      title: '더클라임 강남점',
      place_title: '서울 강남구 테헤란로',
      is_like: true,
      review_score: 4.5,
      review_count: 15,
      position: {
        lat: 37.5063849225134,
        lng: 127.02224662277956,
      },
      img: ['https://source.unsplash.com/random/300x300/?cat'],
    },
    {
      id: 2,
      title: '더클라임 양재점',
      place_title: '서울 강남구 남부 순환로',
      is_like: false,
      review_score: 4.5,
      review_count: 12,
      position: {
        lat: 37.48522589024053,
        lng: 127.03601194974847,
      },
      img: [
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
      ],
    },
    {
      id: 3,
      title: '더클라임 신사점',
      place_title: '서울 강남구 압구정로2길',
      is_like: false,
      review_score: 4.5,
      review_count: 5,
      position: {
        lat: 37.52111687308989,
        lng: 127.01919671596526,
      },
      img: [
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
      ],
    },
    {
      id: 4,
      title: '더클라임 논현점',
      place_title: '서울 서초구 강남대로',
      is_like: true,
      review_score: 5,
      review_count: 25,
      position: {
        lat: 37.508263519405965,
        lng: 127.02223869761437,
      },
      img: [
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
      ],
    },
    {
      id: 5,
      title: '더클라임 사당점',
      place_title: '서울 관악구 과천대로',
      is_like: false,
      review_score: 0,
      review_count: 0,
      position: {
        lat: 37.47444934741218,
        lng: 126.98145113891935,
      },
      img: [
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
      ],
    },
    {
      id: 6,
      title: '더클라임 서울대점',
      place_title: '서울 강남구 남부 순환로 2615 지하 1층',
      is_like: false,
      review_score: 4.4,
      review_count: 3,
      position: {
        lat: 37.48521688274289,
        lng: 127.03600346537529,
      },
      img: [
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
      ],
    },
  ],
  keyword: '더클',
  total: 6,
};

export const detailMarkerMock: DetailPlaceType = {
  id: 1,
  img_urls: [
    'https://source.unsplash.com/random/300x300/?cat',
    'https://source.unsplash.com/random/300x300/?cat',
    'https://source.unsplash.com/random/300x300/?cat',
    'https://source.unsplash.com/random/300x300/?cat',
    'https://source.unsplash.com/random/300x300/?cat',
    'https://source.unsplash.com/random/300x300/?cat',
  ],
  logo_img: 'https://source.unsplash.com/random/300x300/?cat',
  phone: '010-1234-5678',
  title: '더클라임 봉은사점',
  place_title: '서울 강남구 영동대로 618',
  site_urls: [
    {
      label: 'homepage',
      url: 'http://www.naver.com',
    },
    {
      label: 'instagram',
      url: 'http://www.instagram.com',
    },
  ],
  state: true,
  week_day: '평일 10:00 ~ 23:00',
  week_end: '공휴일(토, 일 포함) 10:00 ~ 20:00',
  setting_day: '목요일',
  position: {
    lat: 37.27943075229118,
    lng: 127.01763998406159,
  },
  bar_chart_data: [
    {
      point: 5,
      count: 10,
    },
    {
      point: 4,
      count: 5,
    },
    {
      point: 3,
      count: 12,
    },
    {
      point: 2,
      count: 7,
    },
    {
      point: 1,
      count: 16,
    },
  ],
  line_chart_data: [
    {
      month: 7,
      avg: 2.5,
      count: 20,
    },
    {
      month: 8,
      avg: 4.5,
      count: 6,
    },
    {
      month: 9,
      avg: 1.3,
      count: 8,
    },
    {
      month: 10,
      avg: 4.1,
      count: 12,
    },
    {
      month: 11,
      avg: 4.0,
      count: 15,
    },
    {
      month: 12,
      avg: 5,
      count: 5,
    },
  ],
};
