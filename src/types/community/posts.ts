export interface PostsProps {
  id: number;
  title: string;
  content: string;
  view_count: number;
  thumbnail_image: string;
  category: number;
  user_id: number;
  user_nickname: string;
  user_profile_image: string;
  user_email: string;
  created_at: string;
  updated_at: string;
  like_count: number;
  comment_count: number;
}

export interface PostsStateProps {
  categoryId: number;
  setCategoryId: (value: number) => void;
}
