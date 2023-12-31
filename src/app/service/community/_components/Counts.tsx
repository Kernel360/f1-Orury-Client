import { CountsProps } from '@/types/community/counts';
import CountItem from '@/app/service/community/_components/CountItem';
import COUNT_ITEM from '@/constants/community/counts';
import { randomUUID } from 'crypto';

function Counts({ size, likes, comments, views }: CountsProps) {
  const getCount = (index: number) => {
    if (!index) return likes;
    if (index === 1) return comments;

    return views;
  };

  return (
    <div className="flex gap-2 w-full">
      {COUNT_ITEM.map(({ icon, activeIcon, color }, index) => (
        <CountItem
          key={randomUUID()}
          icon={icon}
          count={getCount(index)}
          color={color}
          size={size}
          activeIcon={activeIcon}
        />
      ))}
    </div>
  );
}

export default Counts;
