'use client';

import Image from 'next/image';
import getTimeDiff from '@/util/getTimeDiff';
import POST from '@/constants/community/post';
import { UserProps } from '@/types/community/user';
import { like_outline, comment } from '$/community';
import { useState } from 'react';
import { like_active_red } from '$/community/active';
import CommentButtons from '@/app/service/community/_components/comment/CommentButtons';

function User({
  user_profile_image,
  user_nickname,
  created_at,
  like_count,
  id,
  comment_count,
  is_like,
  hasButton,
}: UserProps) {
  // 댓글의 좋아요 수 (number)
  const [likes, setLikes] = useState(like_count);

  // 유저가 댓글의 좋아요를 눌렀는 지 여부 (boolean)
  const [isLike, setisLike] = useState(is_like);

  const renderLikeCount = (likes?: number) => {
    if (likes) {
      return (
        <>
          <Image
            src={isLike ? like_active_red : like_outline}
            alt="좋아요"
            width={12}
            height={12}
            quality={100}
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
          <Image
            src={comment}
            alt="댓글"
            quality={100}
            width={12}
            height={12}
          />
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
          id={id}
          isLike={isLike}
          setLikes={setLikes}
          setIsLike={setisLike}
        />
      )}
    </div>
  );
}

export default User;
