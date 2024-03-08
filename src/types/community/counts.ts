export interface CountsProps {
  category: number;
  postId: number;
  size: number;
  likes: number;
  comments: number;
  views: number;
  isLike: boolean;
}

export interface CountItemProps {
  category: number;
  postId: number;
  count: number;
  color: string;
  icon: string;
  isLike: boolean;
}
