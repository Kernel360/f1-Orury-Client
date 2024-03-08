import { Dispatch, SetStateAction } from 'react';

export interface BottonSheetProps {
  bottomSheetTitle: string;
  isSheetOpen: boolean;
  setIsSheetOpen?: Dispatch<SetStateAction<boolean>>;
  onDisMiss: () => void;
}
