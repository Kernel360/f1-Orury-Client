export interface CountsProps {
  size: number;
  likes: number;
  comments: number;
  views: number;
}

export interface CountItemProps {
  icon: string;
  activeIcon?: string;
  count: number;
  color: string;
  size: number;
}
