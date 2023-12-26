import { like_outline, comment, view } from '$/community';
import { like_active_red } from '$/community/active';

const COUNT_ITEM = Object.freeze([
  { icon: like_outline, activeIcon: like_active_red, color: 'text-red' },
  { icon: comment, color: 'text-primary' },
  { icon: view, color: 'text-grey-500' },
]);

export default COUNT_ITEM;
