export interface UserProps {
  user_profile_image: string;
  user_nickname: string;
  created_at: string;
  id?: number;
  is_like?: boolean;
  like_count?: number;
  comment_count?: number;
  hasButton?: boolean;
}
