interface ReactionType {
  level: number;
  count: number;
}
interface ReviewDataType {
  id: number;
  isMine?: {
    status: boolean;
    point: number;
  };
  review_reaction: ReactionType[];
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

export type { ReactionType, ReviewDataType, ReviewResponseType };
