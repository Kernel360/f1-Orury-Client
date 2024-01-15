'use client';

import { CountItemProps } from '@/types/community/counts';
import { Eye, Heart, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import postPostLike from '../[id]/api/postPostLike';
import deletePostLike from '../[id]/api/deletePostLike';

function CountItem({ ...props }: CountItemProps) {
  const { postId, count, color, icon } = props;
  const [isClicked, setIsClicked] = useState(false);
  const [likes, setLikes] = useState(count);

  const clickHandler = async (isClicked: boolean) => {
    setIsClicked(!isClicked);
    setLikes(prevLikes => (isClicked ? prevLikes - 1 : prevLikes + 1));
    if (isClicked) {
      await deletePostLike({ post_id: postId });
    } else {
      await postPostLike({ post_id: postId });
    }
  };

  const renderIcon = () => {
    switch (icon) {
      case 'like':
        return (
          <Heart
            size={14}
            strokeWidth={2.5}
            color="#FF006B"
            fill={isClicked ? '#FF006B' : '#fff'}
          />
        );
      case 'comment':
        return <MessageCircle size={14} strokeWidth={2.5} color="#855AFF" />;
      default:
        return <Eye size={16} strokeWidth={2.5} color="#96A2AC" />;
    }
  };

  return (
    <button
      type="button"
      className="flex gap-1 cursor-pointer items-center"
      onClick={() => clickHandler(isClicked)}
    >
      {renderIcon()}
      <span className={`text-${color} min-w-[16px] text-left text-xs`}>
        {likes}
      </span>
    </button>
  );
}

export default CountItem;
