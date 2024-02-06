import { create } from 'zustand';
import type { ReviewStoreProps } from '@/types/map/ReviewProps';

const useReviewStore = create<ReviewStoreProps>(set => ({
  isOpen: false,
  state: null,
  reviewId: null,
  onReview: (reviewId) => set({ state: 'review', reviewId, isOpen: true }),
  onMyPage: () => set({ state: 'mypage', isOpen: true }),
  setFixMode: () => set({ state: 'fix' }),
  setCreateMode: () => set({ state: 'create' }),
  closeMode: () => set({ state: 'review' }),
  reset: () => set({ state: null, reviewId: null, isOpen: false }),
}));

export default useReviewStore;
