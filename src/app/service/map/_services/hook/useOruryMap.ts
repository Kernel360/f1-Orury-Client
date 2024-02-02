import useSWR from 'swr';
import { END_POINT } from '@/constants/api/end-point';
import type { PositionType, SearchKeywordListType } from '@/types/map/map';
import { axiosInstance } from '@/lib/axios/axios-instance';

const useOruryMap = {
  getSearchList: async (itemInfo: PositionType, search_word: string) => {
    const {
      data: searchResult,
      mutate: searchKeyword,
      isLoading: searchLoading,
    } = useSWR<SearchKeywordListType>(
      END_POINT.gymController.searchList(itemInfo, search_word),
      axiosInstance.get,
    );
    return { searchKeyword, searchResult, searchLoading };
  },
  // getDetail: (searchId: string) => {
  //   const { data: detailInfo, isLoading: isDetailLoading } = useSWR(
  //     END_POINT.gymController.detail(searchId),
  //     fetcher,
  //   );
  //   return { detailInfo, isDetailLoading };
  // },
};

export default useOruryMap;
