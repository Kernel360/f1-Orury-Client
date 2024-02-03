import useOruryReview from './useOruryReview';

const useInfinityFetch = (state: string | null, selectId: string) => {
  if (state === 'mypage' || selectId === '') {
    // 마이페이지
    return useOruryReview.getReviews('1');
  }

  return useOruryReview.getReviews(selectId);
};

export default useInfinityFetch;
