export interface ChildrenCommentProps {
  id: number;
  content: string;
  parent_id: number;
  user_id: number;
  user_nickname: string;
  user_profile_image: string;
  created_at: string;
  updated_at?: string;
  is_like: boolean;
  like_count: number;
}

export interface CommentProps {
  id: number;
  content: string;
  parent_id: number;
  user_id: number;
  user_nickname: string;
  user_profile_image: string;
  created_at: string;
  updated_at?: string;
  is_like: boolean;
  like_count: number;
  children?: ChildrenCommentProps[];
}
