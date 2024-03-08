/* eslint-disable import/no-absolute-path */
import map from '$/icons/map.svg';
import board from '$/icons/board.svg';
import soon from '$/images/commingSoon.png';
// import crew from '$/icons/crew.svg';

const NAVIGATE_BLOCKS = {
  MAP: {
    index: 0,
    href: '/service/map',
    src: map,
    sub: '지도',
    title: '암장 정보',
  },
  COMMUNITY: {
    index: 1,
    href: '/service/community',
    src: board,
    sub: '커뮤니티',
    title: '게시판',
  },
  CREW: {
    index: 2,
    href: '/service/crew',
    src: soon,
    sub: '',
    title: '크루',
  },
};

export default NAVIGATE_BLOCKS;
