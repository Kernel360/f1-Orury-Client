import type { ReviewProps } from '@/types/map/ReviewProps';
import { ChevronDown, ChevronLeft, PenSquare } from 'lucide-react';
import { reviewMock } from '@/__mock__/data/review.mock';
import FirstReviewModal from '@/app/service/map/_components/review-modal/FirstReviewModal';
import ReviewList from '@/app/service/map/_components/review-component/ReviewList';
import { IconButton } from '@mui/material';
import { COLOR } from '@/styles/color';
import { cn } from '@/lib/utils';
import useReviewStore from '@/store/review/reviewStore';
import ReviewRegisterModal from './ReviewRegisterModal';
import { useSearchParams } from 'next/navigation';
import useInfinityFetch from '@/apis/map/hook/useReviewInfinity';

/**
 * @description 지도 위에 띄위기 위해서 Modal로 구현을 합니다.
 * @param position 어느 방향에서 모달이 열릴지 결정합니다.
 * @param handleImageOpen 이미지 모달을 엽니다.
 */
function ReviewModal({ position, handleImageOpen }: ReviewProps) {
  const selectId = useSearchParams().get('selectId') ?? '';

  const { isOpen, reset, setCreateMode, setFixMode, state } = useReviewStore(
    state => state,
  );

  const { data, isLoading } = useInfinityFetch(state, selectId);

  if (data) {
    console.log(data);
  }

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

  const { title, review_list, is_first } = reviewMock;

  return (
    <div className={ModalClassName}>
      <ReviewRegisterModal />
      <FirstReviewModal title={title} isFirst={is_first} />
      <div className="w-full max-w-[768px] z-[101] bg-white px-1 h-[3.5rem] fixed shadow flex items-center justify-center">
        <button type="button" className={PositionClassName} onClick={reset}>
          {position === 'center' ? <ChevronDown /> : <ChevronLeft />}
        </button>
        {title}
      </div>
      {state !== 'mypage' && (
        <div className="relative mt-[3.5rem]">
          <ReviewList handleImageOpen={handleImageOpen} list={review_list} />
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
  );
}

export default ReviewModal;
