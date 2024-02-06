import useSWR from 'swr';
import { END_POINT } from '@/constants/api/end-point';
import type {
  CenterType,
  DetailPlaceType,
  OneSearchKeywordType,
} from '@/types/map/map';
import { axiosInstance } from '@/lib/axios/axios-instance';
import { AxiosResponse } from 'axios';
import { TResponse } from '@/types/common/response';

const useMap = {
  useGetSearchList: (itemInfo: CenterType, search_word: string) =>
    useSWR<AxiosResponse<TResponse<OneSearchKeywordType[]>>>(
      END_POINT.gymController.searchList(itemInfo, search_word),
      axiosInstance.get,
    ),

  useGetDetail: (selectId: string) =>
    useSWR<AxiosResponse<TResponse<DetailPlaceType>>>(
      END_POINT.gymController.detail(selectId),
      axiosInstance.get,
    ),
};

export default useMap;
