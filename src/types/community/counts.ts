export interface CountsProps {
  postId: number;
  size: number;
  likes: number;
  comments: number;
  views: number;
}

export interface CountItemProps {
  postId: number;
  count: number;
  color: string;
  icon: string;
}
