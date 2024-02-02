import useSWR from 'swr';
import { END_POINT } from '@/constants/api/end-point';
import type {
  CenterType,
  SWRResponseWithData,
  SearchIdDetailMapType,
  SearchKeywordListType,
} from '@/types/map/map';
import { axiosInstance } from '@/lib/axios/axios-instance';

const useOruryMap = {
  getSearchList: (itemInfo: CenterType, search_word: string) => {
    return useSWR<SWRResponseWithData<SearchKeywordListType>>(
      END_POINT.gymController.searchList(itemInfo, search_word),
      axiosInstance.get,
    );
  },
  getDetail: (selectId: string) => {
    return useSWR<SWRResponseWithData<SearchIdDetailMapType>>(
      END_POINT.gymController.detail(selectId),
      axiosInstance.get,
    );
  },
};

export default useOruryMap;
