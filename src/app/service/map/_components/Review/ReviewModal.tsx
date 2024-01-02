import type { ReviewProps } from '@/types/map/ReviewProps';
import clsx from 'clsx';
import { ChevronDown, ChevronLeft, PenSquare } from 'lucide-react';
import { reviewMock } from '@/__mock__/data/review.mock';
import FirstReviewModal from '@/app/service/map/_components/Review/FirstReviewModal';
import ReviewList from '@/app/service/map/_components/Review/ReviewList';
import { IconButton } from '@mui/material';

/**
 * @description 지도 위에 띄위기 위해서 Modal로 구현을 합니다.
 * @param onCloseModal 해당 Modal을 닫기 위한 함수입니다.
 * @param isOpen 해당 Modal의 열림 여부를 나타냅니다.
 * @param position 어느 방향에서 모달이 열릴지 결정합니다.
 * @param handleImageOpen 이미지 모달을 엽니다.
 */
function ReviewModal({
  isOpen,
  position,
  onCloseModal,
  handleImageOpen,
}: ReviewProps) {
  const ModalClassName = clsx(
    'w-full max-w-[768px] overflow-y-scroll duration-1000 h-full top-0 right-0 absolute bg-white',
    { 'opacity-0 z-0': !isOpen },
    { 'opacity-1 z-[100]': isOpen },
    { 'top-1/2': position === 'center' && !isOpen },
    { 'right-1/2': position === 'right' && !isOpen },
  );

  const PositionClassName = clsx(
    'absolute',
    { ' right-3': position === 'center' },
    { ' left-3': position === 'right' },
  );

  const { title, review_list, is_first } = reviewMock;

  return (
    <div className={ModalClassName}>
      <FirstReviewModal title={title} isFirst={is_first} />
      <div className="w-full max-w-[768px] z-[101] bg-white px-1 h-[3.5rem] fixed shadow flex items-center justify-center">
        <button
          type="button"
          className={PositionClassName}
          onClick={onCloseModal}
        >
          {position === 'center' ? <ChevronDown /> : <ChevronLeft />}
        </button>
        {title}
      </div>
      <ReviewList handleImageOpen={handleImageOpen} list={review_list} />
      <IconButton
        size="large"
        className="fixed bottom-6 right-6 z-[50] rounded-3xl bg-white w-[3rem] h-[3rem] shadow-main"
      >
        <PenSquare strokeWidth={1.5} />
      </IconButton>
    </div>
  );
}

export default ReviewModal;
