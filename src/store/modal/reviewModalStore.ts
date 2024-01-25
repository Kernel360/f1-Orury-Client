import {create} from "zustand";
import {ReviewModalStore} from "@/types/map/review";

export const useReviewModalStore = create<ReviewModalStore>(set => ({
    isOpen: false,
    callback: () => {},
    setModalOpen: (callback : ()=> void) => set({ isOpen: true, callback }),
    setModalClose: () => set({ isOpen: false, callback: () => {} }),
}));
