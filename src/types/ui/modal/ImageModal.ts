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

export interface ImageModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
  image: string | null;
}

export interface ImageSliderModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
  images: string[];
}
