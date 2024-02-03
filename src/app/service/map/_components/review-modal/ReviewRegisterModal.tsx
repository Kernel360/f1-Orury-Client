import { ReviewRegisterModalProps } from '@/types/map/ReviewProps';
import { cn } from '@/lib/utils';
import useReviewStore from '@/store/review/reviewStore';
import { Button } from '@/app/_components/ui/button';

function ReviewRegisterModal() {
  const { state, closeMode } = useReviewStore(state => state);

  const isOpen = state === 'create' || state === 'fix';

  const ModalClassName = cn(
    'w-full max-w-[768px] overflow-y-scroll duration-1000 h-full bottom-0 right-0 absolute bg-white',
    { 'opacity-0 z-0': !isOpen },
    { 'opacity-1 z-[300]': isOpen },
    { 'bottom-1/2': !isOpen },
  );

  const title = {
    create: '리뷰 작성',
    fix: '리뷰 수정',
  };

  if (state === null || state === 'mypage') return;

  return (
    <div className={ModalClassName}>
      {title[state]}
      <Button type="button" onClick={closeMode}>
        closeModal
      </Button>
    </div>
  );
}

export default ReviewRegisterModal;
