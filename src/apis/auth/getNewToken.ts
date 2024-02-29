import { END_POINT } from '@/constants/api/end-point';
import { axiosInstance } from '@/lib/axios/axios-instance';
import { getCookie } from '@/lib/cookie';
import { TResponse } from '@/types/common/response';
import { decrypt } from '@/utils/crypto';

interface GetNewTokenProps {
  access_token: string;
  refresh_token: string;
}

export const getNewToken = async () => {
  const refreshToken = decrypt(getCookie({ name: 'refresh_token' }));

  const { data: response } = await axiosInstance.post<
    TResponse<GetNewTokenProps>
  >(END_POINT.auth.refresh, null, {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });

  return response.data;
};
