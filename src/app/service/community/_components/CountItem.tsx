'use client';

import postPostLike from '@/app/service/community/[id]/api/postPostLike';
import deletePostLike from '@/app/service/community/[id]/api/deletePostLike';
import usePostListApi from '@/hooks/community/usePostList';

import { useState } from 'react';
import { CountItemProps } from '@/types/community/counts';
import { Eye, Heart, MessageCircle } from 'lucide-react';
import { COLOR } from '@/styles/color';

function CountItem({ ...props }: CountItemProps) {
  const { postId, count, color, icon, isLike, category } = props;
  const { mutate } = usePostListApi.useGetPostList(category);
  const [isLiked, setIsLiked] = useState(isLike);
  const [likes, setLikes] = useState(count);
  const { red, white, primary, grey400 } = COLOR;

  const handleClick = async (isLiked: boolean) => {
    setIsLiked(!isLiked);
    setLikes(prevLikes => (isLiked ? prevLikes - 1 : prevLikes + 1));

    if (isLiked) await deletePostLike({ post_id: postId });
    else await postPostLike({ post_id: postId });

    await mutate();
  };

  const renderIcon = () => {
    switch (icon) {
      case 'like':
        return (
          <Heart
            size={14}
            strokeWidth={2.5}
            color={red}
            fill={isLiked ? red : white}
            onClick={() => handleClick(isLiked)}
            className="cursor-pointer hover:scale-125"
          />
        );
      case 'comment':
        return <MessageCircle size={14} strokeWidth={2.5} color={primary} />;
      default:
        return <Eye size={16} strokeWidth={2.5} color={grey400} />;
    }
  };

  return (
    <div className="flex gap-1  items-center">
      {renderIcon()}
      <span className={`text-${color} min-w-[16px] text-left text-xs`}>
        {likes}
      </span>
    </div>
  );
}

export default CountItem;
