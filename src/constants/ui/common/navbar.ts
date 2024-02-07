const NAVBAR = {
  map: {
    href: '/service/map',
    text: '지도',
  },
  community: {
    href: '/service/community',
    text: '커뮤니티',
  },
  home: {
    href: '/service',
    text: '홈',
  },
  crew: {
    href: '/service/crew',
    text: '크루',
  },
  my: {
    href: '/service/user',
    text: 'MY',
  },
} as const;

export default NAVBAR;
