import useSWRInfinite from 'swr/infinite';

import { getNotificationListKey } from '@/utils/getKeys';
import { axiosInstance } from '@/lib/axios/axios-instance';
import { NotificationData } from '@/types/notification';
import { TResponse } from '@/types/common/response';
import { AxiosResponse } from 'axios';

const useNotificationListApi = {
  useGetNotificationList: () =>
    useSWRInfinite<AxiosResponse<TResponse<NotificationData>>>(
      (pageIndex, previousPageData) => {
        return getNotificationListKey(pageIndex, previousPageData);
      },
      axiosInstance.get,
      {
        revalidateFirstPage: false,
      },
    ),
};

export default useNotificationListApi;
