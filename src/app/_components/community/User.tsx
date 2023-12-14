'use client';

import Image from 'next/image';
import getTimeDiff from '@/utils/getTimeDiff';
import POST from '@/constants/community/post';
import { UserProps } from '@/types/community/user';
import { thumbsUp, comment } from '$/community';
import { useState } from 'react';
import CommentButtons from '@/app/_components/community/comment/CommentButtons';
import { thumbsUp_active } from '$/community/active';

function User({
  user_profile_image,
  user_nickname,
  created_at,
  like_count,
  comment_count,
  isLike,
  hasButton,
}: UserProps) {
  const [likes, setLikes] = useState(like_count);
  const [isLiked, setisLiked] = useState(isLike);

  const renderLikeCount = (likes?: number) => {
    if (likes) {
      return (
        <>
          <Image
            src={isLiked ? thumbsUp_active : thumbsUp}
            alt="좋아요"
            width={12}
          />
          <span className="text-red text-xs">{likes}</span>
        </>
      );
    }

    return null;
  };

  const renderCommentCount = (commentCount?: number) => {
    if (commentCount) {
      return (
        <>
          <Image src={comment} alt="댓글" width={12} />
          <span className="text-primary text-xs">{commentCount}</span>
        </>
      );
    }

    return null;
  };

  return (
    <div className="flex w-full justify-between">
      <div className="flex gap-2">
        <Image
          src={user_profile_image}
          alt="image"
          width={POST.imageSize}
          height={POST.imageSize}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <span className="text-sm font-semibold">{user_nickname}</span>
          <div className="flex gap-[6px]">
            <span className="text-xs text-grey-500">
              {getTimeDiff(created_at)}
            </span>
            <div className="flex gap-1">
              {renderLikeCount(likes)}
              {renderCommentCount(comment_count)}
            </div>
          </div>
          <div />
        </div>
      </div>
      {hasButton && (
        <CommentButtons
          isLike={isLike}
          setLikes={setLikes}
          setIsLiked={setisLiked}
        />
      )}
    </div>
  );
}

export default User;
