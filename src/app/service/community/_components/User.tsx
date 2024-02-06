'use client';

import Image from 'next/image';
import getTimeDiff from '@/utils/getTimeDiff';
import CommentButtons from '@/app/service/community/[id]/_components/comment/CommentButtons';

import { useState } from 'react';
import { COLOR } from '@/styles/color';
import { UserProps } from '@/types/community/user';
import { Heart, MessageCircle } from 'lucide-react';

function User({ ...props }: UserProps) {
  const { red } = COLOR;
  const {
    user_profile_image,
    user_nickname,
    created_at,
    like_count,
    comment_id,
    post_id,
    parent_id,
    comment_count,
    is_like,
    hasButton,
  } = props;

  // 댓글의 좋아요 수 (number)
  const [likes, setLikes] = useState(like_count);

  // 유저가 댓글의 좋아요를 눌렀는 지 여부 (boolean)
  const [isLike, setisLike] = useState(is_like);

  const renderLikeCount = (likes?: number) => {
    if (likes) {
      return (
        <div className="flex mr-1 gap-[2px]">
          <Heart size={12} color={red} strokeWidth={2.5} className="mt-[2px]" />
          <span className="text-red text-xs pl-[1px]">{likes}</span>
        </div>
      );
    }

    return null;
  };

  const renderCommentCount = (commentCount?: number) => {
    if (commentCount) {
      return (
        <div className="flex gap-[2px]">
          <MessageCircle
            size={12}
            strokeWidth={2.5}
            color="#855AFF"
            className="mt-[2px]"
          />
          <span className="text-primary text-xs">{commentCount}</span>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="flex w-full justify-between">
      <div className="flex gap-2">
        {user_profile_image && (
          <Image
            src={user_profile_image}
            alt="image"
            width={36}
            height={36}
            className="rounded-full"
          />
        )}

        <div className="flex flex-col">
          <span className="text-sm font-semibold">{user_nickname}</span>
          <div className="flex gap-[6px]">
            <span className="text-xs text-grey-500">
              {getTimeDiff(created_at)}
            </span>
            <div className="flex gap-[2px]">
              {renderLikeCount(likes)}
              {renderCommentCount(comment_count)}
            </div>
          </div>
          <div />
        </div>
      </div>
      {hasButton && (
        <CommentButtons
          commentId={comment_id}
          postId={post_id}
          parentId={parent_id}
          isLike={isLike}
          setLikes={setLikes}
          setIsLike={setisLike}
        />
      )}
    </div>
  );
}

export default User;
