import { END_POINT } from '@/constants/api/end-point';
import { axiosInstance } from '@/lib/axios/axios-instance';
import { getCookie } from '@/lib/cookie';
import { decrypt } from '@/utils/crypto';

export const getNewAccessToken = async () => {
  const { data } = await axiosInstance.post(END_POINT.auth.refresh, {
    refresh_token: decrypt(getCookie({ name: 'refresh_token' })),
  });

  return data.newAccessToken;
};
