export interface OnePostProps {
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

export interface PostDetailProps {
  id: number;
  title: string;
  content: string;
  view_count: number;
  comment_count: number;
  like_count: number;
  images: string[];
  category: number;
  created_at: string;
  updated_at: string;
  is_mine: boolean;
  user_nickname: string;
  user_profile_image: string;
  is_like: boolean;
}

export type PostListData = {
  posts: OnePostProps[];
  cursor: number;
  next_page?: number;
};

export interface PostRequestProps {
  title: string;
  content: string;
  category: string;
  images: string;
}

export interface PostFormDataProps {
  request: PostRequestProps;
  images: File[];
}

export interface UsePostsStateProps {
  categoryId: number;
  setCategoryId: (value: number) => void;
}

export interface UseOnePostState {
  title: string;
  content: string;
  setTitle: (value: string) => void;
  setContent: (value: string) => void;
}
