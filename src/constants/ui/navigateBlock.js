// eslint-disable-next-line import/no-unresolved
import { map, board, crew } from 'public/index';

const NAVIGATE_BLOCKS = {
  MAP: {
    index: 0,
    href: '/map',
    src: map,
    sub: '지도',
    title: '암장 정보',
  },
  COMMUNITY: {
    index: 1,
    href: '/community',
    src: board,
    sub: '커뮤니티',
    title: '게시판',
  },
  CREW: {
    index: 2,
    href: '/crew',
    src: crew,
    sub: '',
    title: '크루',
  },
};

export default NAVIGATE_BLOCKS;
