import { thumbsUp, comment, view } from '$/community';
import { thumbsUp_active } from '$/community/active';

const COUNT_ITEM = Object.freeze([
  { icon: thumbsUp, activeIcon: thumbsUp_active, color: 'text-red' },
  { icon: comment, color: 'text-primary' },
  { icon: view, color: 'text-grey-500' },
]);

export default COUNT_ITEM;
