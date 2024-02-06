import type { ReviewProps } from '@/types/map/ReviewProps';
import { ChevronDown, ChevronLeft, PenSquare } from 'lucide-react';
import ReviewList from '@/app/service/map/_components/review-component/ReviewList';
import { IconButton } from '@mui/material';
import { COLOR } from '@/styles/color';
import { cn } from '@/lib/utils';
import useReviewStore from '@/store/review/reviewStore';
import ReviewRegisterModal from './ReviewRegisterModal';
import useReviewInfinity from '@/apis/review/hooks/useReviewInfinity';
import { Skeleton } from '@/app/_components/ui/skeleton';

/**
 * @description 지도 위에 띄위기 위해서 Modal로 구현을 합니다.
 * @param position 어느 방향에서 모달이 열릴지 결정합니다.
 */
function ReviewModal({ position }: ReviewProps) {
  const { isOpen, reset, setCreateMode, setFixMode, state, reviewId } =
    useReviewStore(state => state);
  const { data, isLoading } = useReviewInfinity(state, reviewId);

  const ModalClassName = cn(
    'w-full max-w-[768px] overflow-y-scroll duration-1000 h-full top-0 right-0 absolute bg-white',
    { 'opacity-0 z-0': !isOpen },
    { 'opacity-1 z-[100]': isOpen },
    { 'top-1/2': position === 'center' && !isOpen },
    { 'right-1/2': position === 'right' && !isOpen },
  );

  const PositionClassName = cn(
    'absolute',
    { ' right-3': position === 'center' },
    { ' left-3': position === 'right' },
  );

  if (isLoading || !data || data[0] === undefined) return <></>;

  const review_list = data?.map(res => res.data.data);

  return (
    <>
      <ReviewRegisterModal gym_name={review_list[0].gym_name} />
      <div className={ModalClassName}>
        <div className="w-full max-w-[768px] z-[101] bg-white px-1 h-[3.5rem] fixed shadow flex items-center justify-center">
          <button type="button" className={PositionClassName} onClick={reset}>
            {position === 'center' ? <ChevronDown /> : <ChevronLeft />}
          </button>
          {review_list[0] !== undefined ? (
            `${review_list[0].gym_name}`
          ) : (
            <Skeleton className="w-[70px] h-[24px] bg-gray-200" />
          )}
        </div>
        {state !== 'mypage' && (
          <div className="relative mt-[3.5rem]">
            <ReviewList list={review_list.map(v => v.reviews).flat()} />
            <IconButton
              onClick={setCreateMode}
              size="large"
              className="fixed bottom-6 right-6 z-[50] rounded-3xl bg-primary w-[3rem] h-[3rem] shadow-main"
            >
              <PenSquare
                fill="#ffffff"
                stroke={COLOR.primary}
                strokeWidth={1.5}
              />
            </IconButton>
          </div>
        )}
      </div>
    </>
  );
}

export default ReviewModal;
