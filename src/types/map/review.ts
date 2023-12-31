interface ReviewDataType {
  id: number;
  isMine?: {
    status: boolean;
    point: number;
  };
  writer: {
    name: string;
    img: string;
  };
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

interface OneReviewProps {
  item: ReviewDataType;
  handleImageOpen: (url: string) => void;
}

export type { ReviewDataType, ReviewResponseType, OneReviewProps };
