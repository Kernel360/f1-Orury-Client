export interface UserProps {
  user_profile_image: string;
  user_nickname: string;
  created_at: string;
  user_id?: number;
  post_id?: number;
  comment_id?: number;
  parent_id?: number;
  is_like?: boolean;
  like_count?: number;
  comment_count?: number;
  hasButton?: boolean;
  is_mine?: boolean;
}
