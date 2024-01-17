export interface CommentProps {
  id: number;
  content: string;
  parent_id: number;
  user_id: number;
  user_nickname: string;
  user_profile_image: string;
  created_at: string;
  updated_at: string;
  like_count: number;
  is_like: boolean;
  deleted: number;
  childComments?: CommentProps[];
}

export interface CommentListData {
  comments: CommentProps;
  cursor: number;
}

export interface CommentStateProps {
  commentId: number;
  parentId: number;
  triggerModify: boolean;
  isFocus: boolean;
  isEditMode: boolean;
  isReplyMode: boolean;
  setCommentId: (value: number) => void;
  setParentId: (value: number) => void;
  setTriggerModify: (value: boolean) => void;
  setIsFocus: (value: boolean) => void;
  setIsEditMode: (value: boolean) => void;
  setIsReplyMode: (value: boolean) => void;
}

export interface ModifyContentProps {
  comment_id: number;
  post_id: number;
  content: string;
}

export interface OneCommentType extends CommentProps {
  post_id: number;
}
