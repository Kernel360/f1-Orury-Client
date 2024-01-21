import { create } from 'zustand';
import type {
  ImagesStoreType,
  ImageStoreType,
} from '@/types/ui/modal/ImageModal';

export const useImageStore = create<ImageStoreType>(set => ({
  isOpen: false,
  image: null,
  setModalOpen: imgUrl => set({ isOpen: true, image: imgUrl }),
  setModalClose: () => set({ isOpen: true, image: null }),
}));

export const useImagesStore = create<ImagesStoreType>(set => ({
  isOpen: false,
  image: [],
  setModalOpen: imgUrl => set({ isOpen: true, image: imgUrl }),
  setModalClose: () => set({ isOpen: true, image: [] }),
}));
