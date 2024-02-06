import type { ReviewProps } from '@/types/map/ReviewProps';
import { ChevronDown, ChevronLeft, PenSquare } from 'lucide-react';
import { IconButton } from '@mui/material';
import { COLOR } from '@/styles/color';
import { cn } from '@/lib/utils';
import useReviewStore from '@/store/review/reviewStore';
import { Skeleton } from '@/app/_components/ui/skeleton';

function ReviewModalSkeleton({
  openPosition,
}: Omit<ReviewProps, 'infinityQuery'>) {
  const { isOpen, reset } = useReviewStore(state => state);

  const ModalClassName = cn(
    'w-full max-w-[768px] bg-white overflow-y-scroll duration-1000 h-full top-0 right-0 absolute bg-white',
    { 'opacity-0 z-0': !isOpen },
    { 'opacity-1 z-[100]': isOpen },
    { 'top-1/2': openPosition === 'center' && !isOpen },
    { 'right-1/2': openPosition === 'right' && !isOpen },
  );

  const PositionClassName = cn(
    'absolute',
    { ' right-3': openPosition === 'center' },
    { ' left-3': openPosition === 'right' },
  );

  return (
    <div className={ModalClassName}>
      <div className="w-full max-w-[768px] z-[101] px-1 h-[3.5rem] fixed shadow flex items-center justify-center">
        <button type="button" className={PositionClassName} onClick={reset}>
          {openPosition === 'center' ? <ChevronDown /> : <ChevronLeft />}
        </button>
        <Skeleton className="w-[70px] h-[24px] bg-gray-200" />
      </div>
      <div className="relative mt-[3.5rem]">
        <IconButton
          size="large"
          className="fixed bottom-6 right-6 z-[50] rounded-3xl bg-primary w-[3rem] h-[3rem] shadow-main"
        >
          <PenSquare fill="#ffffff" stroke={COLOR.primary} strokeWidth={1.5} />
        </IconButton>
      </div>
    </div>
  );
}

export default ReviewModalSkeleton;
