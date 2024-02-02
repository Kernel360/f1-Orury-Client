import type { DetailPlaceType, SearchKeywordListType } from '@/types/map/map';

export const searchMock: SearchKeywordListType = {
  data: [
    {
      doing_business: false,
      id: 1,
      name: '더클라임 강남점',
      road_address: '서울 강남구 테헤란로',
      is_like: true,
      score_average: 4.5,
      review_count: 15,
      position: {
        latitude: 37.5063849225134,
        longitude: 127.02224662277956,
      },
      thumbnail_image: ['https://source.unsplash.com/random/300x300/?cat'],
    },
    {
      doing_business: false,
      id: 2,
      name: '더클라임 양재점',
      road_address: '서울 강남구 남부 순환로',
      is_like: false,
      score_average: 4.5,
      review_count: 12,
      position: {
        latitude: 37.48522589024053,
        longitude: 127.03601194974847,
      },
      thumbnail_image: [
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
      ],
    },
    {
      doing_business: false,
      id: 3,
      name: '더클라임 신사점',
      road_address: '서울 강남구 압구정로2길',
      is_like: false,
      score_average: 4.5,
      review_count: 5,
      position: {
        latitude: 37.52111687308989,
        longitude: 127.01919671596526,
      },
      thumbnail_image: [
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
      ],
    },
    {
      doing_business: false,
      id: 4,
      name: '더클라임 논현점',
      road_address: '서울 서초구 강남대로',
      is_like: true,
      score_average: 5,
      review_count: 25,
      position: {
        latitude: 37.508263519405965,
        longitude: 127.02223869761437,
      },
      thumbnail_image: [
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
      ],
    },
    {
      doing_business: false,
      id: 5,
      name: '더클라임 사당점',
      road_address: '서울 관악구 과천대로',
      is_like: false,
      score_average: 0,
      review_count: 0,
      position: {
        latitude: 37.47444934741218,
        longitude: 126.98145113891935,
      },
      thumbnail_image: [
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
      ],
    },
    {
      doing_business: false,
      id: 6,
      name: '더클라임 서울대점',
      road_address: '서울 강남구 남부 순환로 2615 지하 1층',
      is_like: false,
      score_average: 4.4,
      review_count: 3,
      position: {
        latitude: 37.48521688274289,
        longitude: 127.03600346537529,
      },
      thumbnail_image: [
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
  business_hours: [
    { MONDAY: '5' },
    { TUESDAY: '11' },
    { WEDNESDAY: '12' },
    { THURSDAY: '12' },
    { FRIDAY: '12' },
    { SATURDAY: '123' },
    { SUNDAY: '123' },
  ],
  doing_business: false,
  images: [
    'https://source.unsplash.com/random/300x300/?cat',
    'https://source.unsplash.com/random/300x300/?cat',
    'https://source.unsplash.com/random/300x300/?cat',
    'https://source.unsplash.com/random/300x300/?cat',
    'https://source.unsplash.com/random/300x300/?cat',
    'https://source.unsplash.com/random/300x300/?cat',
  ],
  isLike: false,
  id: 1,
  phone_number: '010-1234-5678',
  name: '더클라임 봉은사점',
  road_address: '서울 강남구 영동대로 618',
  homepage_link: 'http://www.naver.com',
  instagram_link: 'http://www.instagram.com',
  kakao_map_link: 'https://kko.to/m3PxlFswg2',
  review_count: 0,
  address: '가가가가가',
  score_average: 0,
  brand: '신세계',
  setting_day: '목요일',
  position: {
    latitude: 37.27943075229118,
    longitude: 127.01763998406159,
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
