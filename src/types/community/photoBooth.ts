import { Dispatch, SetStateAction } from 'react';

export interface PhotoBoothProps {
  images: File[];
  setImages: Dispatch<SetStateAction<File[]>>;
}
