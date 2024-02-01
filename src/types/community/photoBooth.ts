import { Dispatch, SetStateAction } from 'react';

export interface PhotoBoothProps {
  images: string[];
  setImages: Dispatch<SetStateAction<string[]>>;
}
