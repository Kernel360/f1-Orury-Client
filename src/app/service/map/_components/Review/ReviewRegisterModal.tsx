import { ReviewRegisterModalProps } from '@/types/map/ReviewProps';
import { cn } from '@/lib/utils';
import useReviewStore from '@/store/review/reviewStore';
import { Button } from '@/app/_components/ui/button';

function ReviewRegisterModal({ isOpen }: ReviewRegisterModalProps) {
  const ModalClassName = cn(
    'w-full max-w-[768px] overflow-y-scroll duration-1000 h-full bottom-0 right-0 absolute bg-white',
    { 'opacity-0 z-0': !isOpen },
    { 'opacity-1 z-[300]': isOpen },
    { 'bottom-1/2': !isOpen },
  );

  const { state, reset: closeModal } = useReviewStore(state => state);

  const title = {
    create: '리뷰 작성',
    fix: '리뷰 수정',
  };

  if (!title) {
    return <div />;
  }

  return (
    <div className={ModalClassName}>
      {title[state]}
      <Button type="button" onClick={closeModal}>
        closeModal
      </Button>
    </div>
  );
}

export default ReviewRegisterModal;
