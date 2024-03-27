import { Pagination } from '@/types/common/response';

export interface NotificationProps {
  id: number;
  user_id: number;
  url: string;
  is_read: boolean;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  image: string;
}

export interface NotificationData extends Pagination {
  content: NotificationProps[];
}
