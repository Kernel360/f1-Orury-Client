export interface ImageStoreType {
  isOpen: boolean;
  image: string | null;
  setModalOpen: (imgUrl: string) => void;
  setModalClose: () => void;
}

export interface ImagesStoreType {
  isOpen: boolean;
  image: string[];
  setModalOpen: (imgUrl: string[]) => void;
  setModalClose: () => void;
}
