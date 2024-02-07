export interface ReactionType {
  type: 'interest' | 'like' | 'help' | 'thumb' | 'angry';
  count: number;
}

export interface ReviewDataType {
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

export interface ReviewResponseType {
  reviews: ReviewDataType[];
  gym_name: string;
  cursor: number;
}

export interface ReviewStateType {
  prevImages: File[] | null;
  prevScore: number | null;
  prevContent: string | null;
  prevId: number | null;
}
