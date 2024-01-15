import { Dispatch, SetStateAction } from 'react';

export interface CommentBtnProps {
  commentId?: number;
  postId?: number;
  parentId?: number;
  isLike?: boolean;
  setIsLike: Dispatch<SetStateAction<boolean | undefined>>;
  setLikes?: Dispatch<SetStateAction<number | undefined>>;
}
