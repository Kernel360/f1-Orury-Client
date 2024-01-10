interface ReactionType {
  type: 'interest' | 'like' | 'help' | 'thumb' | 'angry';
  count: number;
}

interface ReviewDataType {
  id: number;
  isMine?: {
    status: boolean;
    point: number;
  };
  my_reaction: 'interest' | 'like' | 'help' | 'thumb' | 'angry' | null;
  review_reaction: ReactionType[];
  writer: {
    name: string;
    img: string;
  };
  content?: string;
  images: string[];
  score: number;
  create_at: string;
  update_at: string;
}

interface ReviewResponseType {
  title: string;
  is_first: boolean;
  review_list: ReviewDataType[];
}

export type { ReactionType, ReviewDataType, ReviewResponseType };
