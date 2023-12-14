import { Dispatch, SetStateAction } from 'react';

export interface CommentBtnProps {
  isLike?: boolean;
  setLikes?: Dispatch<SetStateAction<number | undefined>>;
  setIsLiked: Dispatch<SetStateAction<boolean | undefined>>;
}
