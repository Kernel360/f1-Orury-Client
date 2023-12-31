interface ReviewDataType {
  id: number;
  writer: string;
  content?: string;
  img_urls?: string[];
  like_point: number;
  create_at: string;
  update_at: string;
}

interface ReviewResponseType {
  title: string;
  is_first: boolean;
  review_list: ReviewDataType[];
}

export type { ReviewDataType, ReviewResponseType };
