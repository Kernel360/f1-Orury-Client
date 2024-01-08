import { create } from 'zustand';
import type { ReviewStoreProps } from '@/types/map/ReviewProps';

const useReviewStore = create<ReviewStoreProps>(set => ({
  isOpen: false,
  state: 'create',
  reviewId: null,
  setCreateMode: () => set({ state: 'create', isOpen: true }),
  setFixMode: reviewId => set({ state: 'fix', reviewId, isOpen: true }),
  reset: () => set({ isOpen: false }),
}));

export default useReviewStore;
