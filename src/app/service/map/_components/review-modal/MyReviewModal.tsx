import type { ReviewProps } from '@/types/map/ReviewProps';
import { ChevronDown, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import useReviewStore from '@/store/review/reviewStore';
import useIntersect from '@/hooks/common/useIntersection';
import useReviewApi from '@/apis/review/hooks/useReview';
import { v4 } from 'uuid';
import { useEffect } from 'react';
import ReviewModalSkeleton from '../skeleton/ReviwModalSkeleton';
import OneReview from './OneReview';

/**
 * @description 지도 위에 띄위기 위해서 Modal로 구현을 합니다.
 * @param position 어느 방향에서 모달이 열릴지 결정합니다.
 */
function MyReviewModal({ openPosition }: ReviewProps) {
  const { isOpen, reset, state } = useReviewStore(state => state);

  const { data, mutate, size, setSize, isLoading, isValidating } =
    useReviewApi.useGetMyReviews();

  const reviews = data ? data.flat() : [];

  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < 10);

  const isRefreshing = isValidating && data && data.length === size;

  useEffect(() => {
    if (isRefreshing) {
      mutate();
    }
  }, [data?.length, size, isValidating]);

  const bottomRef = useIntersect(() => {
    if (isLoadingMore || isReachingEnd) {
      setSize(size + 1);
    }
  });

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

  if (isLoading || !data || data[0] === undefined) {
    return <ReviewModalSkeleton openPosition={openPosition} />;
  }

  return (
    <div className={ModalClassName}>
      <div className="w-full max-w-[768px] z-[101] px-1 h-[3.5rem] fixed shadow flex items-center justify-center">
        <button type="button" className={PositionClassName} onClick={reset}>
          {openPosition === 'center' ? <ChevronDown /> : <ChevronLeft />}
        </button>
        내가 작성한 리뷰
      </div>
      {state !== 'mypage' && (
        <div className="relative mt-[3.5rem]">
          {reviews
            .map(v => v.data.data.reviews)
            .flat()
            .map(data => (
              <OneReview mutate={mutate} key={v4()} list={data} />
            ))}
          <div ref={bottomRef} />
        </div>
      )}
    </div>
  );
}

export default MyReviewModal;
