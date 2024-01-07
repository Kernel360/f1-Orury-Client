export interface CommentProps {
  id: number;
  content: string;
  parent_id: number;
  user_id: number;
  user_nickname: string;
  user_profile_image: string;
  user_email: string;
  created_at: string;
  updated_at?: string;
  like_count: number;
  is_like: boolean;
  deleted: number;
}

export interface CommentStateProps {
  commentId: number;
  triggerModify: boolean;
  setCommentId: (value: number) => void;
  setTriggerModify: (value: boolean) => void;
}
