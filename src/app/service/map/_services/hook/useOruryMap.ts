import useSWR from 'swr';
import { fetcher } from '@/utils/fetcher';
import { END_POINT } from '@/constants/api/end-point';
import type { SearchKeywordListType } from '@/types/map/map';

const useOruryMap = {
  getList: (keyword: string) => {
    const {
      data: searchResult,
      mutate: searchKeyword,
      isLoading: searchLoading,
    } = useSWR<SearchKeywordListType>(END_POINT.map.search(keyword), fetcher);

    return { searchKeyword, searchResult, searchLoading };
  },
  getDetail: (searchId: string) => {
    const { data: detailInfo, isLoading: isDetailLoading } = useSWR(
      END_POINT.map.detail(searchId),
      fetcher,
    );
    return { detailInfo, isDetailLoading };
  },
};

export default useOruryMap;
