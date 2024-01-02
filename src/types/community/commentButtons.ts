import { Dispatch, SetStateAction } from 'react';

export interface CommentBtnProps {
  setIsLike: Dispatch<SetStateAction<boolean | undefined>>;
  setLikes?: Dispatch<SetStateAction<number | undefined>>;
  id?: number;
  isLike?: boolean;
}
