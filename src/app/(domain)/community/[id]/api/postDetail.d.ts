interface PostDetailProps {
  id: number;
  user_id: number;
  category: number;
  like_count: number;
  comment_count: number;
  view_count: number;
  title: string;
  content: string;
  user_nickname: string;
  user_profile_image: string;
  created_at: string;
  updated_at: string;
  images: string[];
  comments: CommentProps[];
}

interface CommentProps {
  id: number;
  user_id: number;
  parent_id: number;
  content: string;
  user_nickname: string;
  user_profile_image: string;
  created_at: string;
  updated_at: string;
  children?: CommentProps[];
}

// export interface PostDetail {
//   data: PostType;
// }
