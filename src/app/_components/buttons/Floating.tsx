import { IconButton } from '@mui/material';
import { PenSquare } from 'lucide-react';
import type { FloatingButtonProps } from '@/types/community/floatingButton';

function Floating({ setIsSheetOpen }: FloatingButtonProps) {
  const onButtonClick = () => {
    setIsSheetOpen(true);
  };

  return (
    <IconButton
      type="button"
      size="large"
      onClick={onButtonClick}
      className="flex justify-center items-center sticky bottom-[64px] float-right mr-4 w-12 h-12 bg-primary rounded-full shadow-2xl"
    >
      <PenSquare strokeWidth={1.5} fill="white" stroke="#855AFF" />
    </IconButton>
  );
}

export default Floating;
