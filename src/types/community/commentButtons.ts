import { Dispatch, SetStateAction } from 'react';

export interface CommentBtnProps {
  isLike?: boolean;
  setIsLike: Dispatch<SetStateAction<boolean | undefined>>;
  setLikes?: Dispatch<SetStateAction<number | undefined>>;
}
