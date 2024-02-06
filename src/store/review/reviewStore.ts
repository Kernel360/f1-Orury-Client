import { create } from 'zustand';
import type { ReviewStoreProps } from '@/types/map/ReviewProps';
import { ReviewStateType } from '@/types/map/review';

const useReviewStore = create<ReviewStoreProps>(set => ({
  isOpen: false,
  state: null,
  reviewId: null,
  reviewState: {
    prevImages: null,
    prevScore: null,
    prevContent: null,
    prevId: null,
  },
  onReview: reviewId => set({ state: 'review', reviewId, isOpen: true }),
  onMyPage: () => set({ state: 'mypage', isOpen: true }),
  setFixMode: (reviewState: ReviewStateType) =>
    set({ state: 'fix', reviewState }),
  setCreateMode: () => set({ state: 'create' }),
  closeMode: () =>
    set({
      state: 'review',
      reviewState: {
        prevImages: null,
        prevScore: null,
        prevContent: null,
        prevId: null,
      },
    }),
  reset: () => set({ state: null, reviewId: null, isOpen: false }),
}));

export default useReviewStore;
