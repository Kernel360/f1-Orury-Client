interface ReactionType {
  type: 'interest' | 'like' | 'help' | 'thumb' | 'angry';
  count: number;
}

interface ReviewDataType {
  id: number;
  is_mine: boolean;
  my_reaction: 'interest' | 'like' | 'help' | 'thumb' | 'angry' | null;
  review_reaction_count: ReactionType[];
  content: string | null;
  images: string[];
  score: number;
  create_at: string;
  update_at: string;
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

interface ReviewModalStore {
  isOpen: boolean;
  callback: () => void;
  setModalOpen: (callback: () => void) => void;
  setModalClose: () => void;
}

export type {
  ReactionType,
  ReviewDataType,
  ReviewResponseType,
  ReviewModalStore,
};
