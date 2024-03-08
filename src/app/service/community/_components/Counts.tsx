import { CountsProps } from '@/types/community/counts';
import CountItem from '@/app/service/community/_components/CountItem';
import COUNT_ITEM from '@/constants/community/counts';
import { v4 } from 'uuid';

function Counts({ ...props }: CountsProps) {
  const { postId, likes, comments, views, isLike, category } = props;
  const getCount = (index: number) => {
    if (!index) return likes;
    if (index === 1) return comments;

    return views;
  };

  return (
    <div className="flex gap-1 w-full">
      {Object.entries(COUNT_ITEM).map(([key, value], index) => (
        <CountItem
          key={v4()}
          postId={postId}
          count={getCount(index)}
          color={value}
          icon={key}
          isLike={isLike}
          category={category}
        />
      ))}
    </div>
  );
}

export default Counts;
