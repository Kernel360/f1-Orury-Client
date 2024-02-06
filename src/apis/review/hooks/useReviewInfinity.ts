import useOruryReview from './useOruryReview';

const useInfinityFetch = (state: string | null, selectId: number | null) => {
  if (state === 'mypage') {
    return useOruryReview.getMyReviews();
  }

  return useOruryReview.getReviews(selectId as number);
};

export default useInfinityFetch;
