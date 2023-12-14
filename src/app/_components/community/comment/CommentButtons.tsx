'use client';

import Image from 'next/image';
import { comment, ellipsis, thumbsUp } from '$/user';
import { CommentBtnProps } from '@/types/community/commentButtons';
import { useState } from 'react';

function CommentButtons({ isLike, setLikes, setIsLiked }: CommentBtnProps) {
  const [isClicked, setIsClicked] = useState(false);

  const thumbsUpHandler = () => {
    setIsClicked(!isClicked);
    setIsLiked(isLiked => !isLiked);

    if (setLikes) {
      return isClicked
        ? setLikes(likes => likes! + 1)
        : setLikes(likes => likes! - 1);
    }

    return null;
  };

  return (
    <div className="flex bg-grey-100 px-2 rounded-md h-7">
      <button type="button" className="w-7 flex justify-center items-center">
        <Image src={comment} alt="답글" width={16} />
      </button>
      <button
        type="button"
        className="w-7 flex justify-center items-center"
        onClick={thumbsUpHandler}
      >
        <Image src={thumbsUp} alt="좋아요" width={16} />
      </button>
      {isLike && (
        <button type="button" className="w-7 flex justify-center items-center">
          <Image src={ellipsis} alt="더보기" width={16} />
        </button>
      )}
    </div>
  );
}

export default CommentButtons;
