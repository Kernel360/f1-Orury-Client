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
      images: [
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
      ],
      my_reaction: 'help',
      review_reaction: [
        { type: 'thumb', count: 15 },
        { type: 'interest', count: 12 },
        { type: 'help', count: 9 },
        { type: 'like', count: 7 },
        { type: 'angry', count: 4 },
      ],
      score: 1,
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
      images: [
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
        'https://source.unsplash.com/random/300x300/?cat',
      ],
      my_reaction: null,
      review_reaction: [
        { type: 'thumb', count: 15 },
        { type: 'interest', count: 12 },
        { type: 'help', count: 0 },
        { type: 'like', count: 0 },
        { type: 'angry', count: 0 },
      ],
      score: 10,
      create_at: new Date().toString(),
      update_at: new Date().toString(),
    },
  ],
};
