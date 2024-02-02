import { create } from 'zustand';
import type { ReviewStoreProps } from '@/types/map/ReviewProps';

const useReviewStore = create<ReviewStoreProps>(set => ({
  isOpen: false,
  state: null,
  reviewId: null,
  onMyPage: () => set({ state: 'mypage', isOpen: true }),
  onReview: () => set({ state: null, isOpen: true }),
  setFixMode: reviewId => set({ state: 'fix', reviewId }),
  setCreateMode: () => set({ state: 'create' }),
  closeMode: () => set({ state: null, isOpen: true }),
  reset: () => set({ state: null, reviewId: null, isOpen: false }),
}));

export default useReviewStore;
