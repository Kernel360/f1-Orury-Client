interface PostDetailProps {
  id: number;
  title: string;
  content: string;
  view_count: number;
  images: string[];
  category: number;
  created_at: string;
  updated_at: string;
  user_id: number;
  user_nickname: string;
  user_profile_image: string;
  like_count: number;
  comment_count: number;
  is_like: boolean;
}

interface CommentProps {
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
