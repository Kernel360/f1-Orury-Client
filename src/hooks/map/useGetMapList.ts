import useSWR from 'swr';
import { fetcher } from '@/utils/fetcher';
import { END_POINT } from '@/constants/api/end-point';
import type { SearchKeywordListType } from '@/types/map/map';

function useGetMapList(searchKeyword: string) {
  return useSWR<SearchKeywordListType>(
    () => END_POINT.map.search(searchKeyword),
    fetcher,
  );
}

export default useGetMapList;
