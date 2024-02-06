interface ReactionType {
  type: 'interest' | 'like' | 'help' | 'thumb' | 'angry';
  count: number;
}

interface ReviewDataType {
  id: number;
  is_mine: boolean;
  my_reaction: 'interest' | 'like' | 'help' | 'thumb' | 'angry' | null;
  review_reaction_count: ReactionType[];
  content: string;
  images: string[];
  score: number;
  created_at: string;
  updated_at: string;
  writer: {
    id: number;
    nickname: string;
    profileImage: string;
  };
}

interface ReviewResponseType {
  reviews: ReviewDataType[];
  gym_name: string;
  cursor: number;
}

interface ReviewStateType {
  prevImages: File[] | null;
  prevScore: number | null;
  prevContent: string | null;
  prevId: number | null;
}

export type {
  ReactionType,
  ReviewDataType,
  ReviewResponseType,
  ReviewStateType,
};
