export interface UserProps {
  user_profile_image: string;
  user_nickname: string;
  created_at: string;
  isLike?: boolean;
  like_count?: number;
  comment_count?: number;
  hasButton?: boolean;
}
