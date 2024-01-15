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
  created_at: string;
  updated_at: string;
  like_count: number;
  comment_count: number;
}

export type PostListData = {
  posts: PostsProps[];
  cursor: number;
  next_page?: number;
};

export interface PostDataProps {
  title: string;
  content: string;
  category: string;
  images?: string[];
}

export interface PostsStateProps {
  categoryId: number;
  setCategoryId: (value: number) => void;
}

export interface OnePostProps {
  title: string;
  content: string;
  setTitle: (value: string) => void;
  setContent: (value: string) => void;
}
