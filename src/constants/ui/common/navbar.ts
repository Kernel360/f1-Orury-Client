import {
  map,
  home,
  crew,
  my,
  community,
  map_active,
  home_active,
  crew_active,
  my_active,
  community_active,
} from '$/index';

const NAVBAR = {
  map: {
    href: '/service/map',
    inActiveSrc: map,
    activeSrc: map_active,
    text: '지도',
  },
  community: {
    href: '/service/community',
    inActiveSrc: community,
    activeSrc: community_active,
    text: '커뮤니티',
  },
  home: {
    href: '/service',
    inActiveSrc: home,
    activeSrc: home_active,
    text: '홈',
  },
  crew: {
    href: '/service/crew',
    inActiveSrc: crew,
    activeSrc: crew_active,
    text: '크루',
  },
  my: {
    href: '/service/my-page',
    inActiveSrc: my,
    activeSrc: my_active,
    text: 'MY',
  },
} as const;

export default NAVBAR;
