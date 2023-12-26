export interface ChildCommentProps {
  id: number;
  content: string;
  parent_id: number;
  user_id: number;
  user_nickname: string;
  user_profile_image: string;
  created_at: string;
  updated_at?: string;
  like_count: number;
  is_like: boolean;
  deleted: number;
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
  like_count: number;
  is_like: boolean;
  deleted: number;
  childComments?: ChildCommentProps[];
}
