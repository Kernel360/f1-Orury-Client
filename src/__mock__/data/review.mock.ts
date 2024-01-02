import type { ReviewResponseType } from '@/types/map/review';

export const reviewMock: ReviewResponseType = {
  title: '더클라임 봉은사점',
  is_first: true,
  review_list: [
    {
      id: 1,
      isMine: {
        status: true,
        point: 0,
      },
      writer: {
        name: '닉네임1',
        img: 'https://source.unsplash.com/random/300x300/?dog',
      },
      content: '안녕하세요 저는 이제 막 클라이밍에 입문한 어쩌구 저쩌구',
      img_urls: [
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
      ],
      review_reaction: [
        { level: 1, count: 12 },
        { level: 2, count: 7 },
        { level: 3, count: 9 },
        { level: 4, count: 15 },
      ],
      like_point: 1,
      create_at: new Date().toString(),
      update_at: new Date().toString(),
    },
    {
      id: 2,
      writer: {
        name: '닉네임2',
        img: 'https://source.unsplash.com/random/300x300/?dog',
      },
      content: '안녕하세요 저는 이제 막ㅇㅇㅇ',
      img_urls: [
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
      ],
      review_reaction: [
        { level: 2, count: 7 },
        { level: 4, count: 1 },
      ],
      like_point: 10,
      create_at: new Date().toString(),
      update_at: new Date().toString(),
    },
    {
      id: 3,
      writer: {
        name: '닉네임3',
        img: 'https://source.unsplash.com/random/300x300/?dog',
      },
      content: '가지마셈\n가지말라했다 ㅇㅇ',
      img_urls: [
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
      ],
      review_reaction: [{ level: 1, count: 2 }],
      like_point: 1,
      create_at: new Date().toString(),
      update_at: new Date().toString(),
    },
    {
      id: 4,
      writer: {
        name: '닉네임5',
        img: 'https://source.unsplash.com/random/300x300/?dog',
      },
      content: '안녕하세요 저는 이제 막 클라이밍에 입문한 어쩌구 저쩌구',
      img_urls: [
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
      ],
      like_point: 5,
      review_reaction: [{ level: 4, count: 1 }],
      create_at: new Date().toString(),
      update_at: new Date().toString(),
    },
    {
      id: 5,
      writer: {
        name: '닉네임4',
        img: 'https://source.unsplash.com/random/300x300/?dog',
      },
      content: '안녕하세요 저는 이제 막 클라이밍에 입문한 어쩌구 저쩌구',
      img_urls: [
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
      ],
      like_point: 5,
      review_reaction: [],
      create_at: new Date().toString(),
      update_at: new Date().toString(),
    },
  ],
};
