import { Dispatch, SetStateAction } from 'react';

export interface FloatingButtonProps {
  setIsSheetOpen: Dispatch<SetStateAction<boolean>>;
}
