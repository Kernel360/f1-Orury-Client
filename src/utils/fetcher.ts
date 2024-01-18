import { END_POINT } from '@/constants/api/end-point';
import { getCookie } from '@/lib/cookie';
import axios, { AxiosResponse } from 'axios';
import { decrypt } from '@/utils/crypto';

let accessToken = decrypt(getCookie({ name: 'access_token' }));
const refreshToken = decrypt(getCookie({ name: 'refresh_token' }));

// TOFIXED: headers key name 변경 예정
// TOFIXED: headers key name 변경 예정
export const fetcher = (url: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        headers: {
          accessToken: `Bearer ${accessToken}`,
          withCredentials: true,
        },
      })
      .then(res => {
        // TOFIXED: status code 재논의 필요
        // TOFIXED: status code 재논의 필요
        if (res.status === 900) {
          axios
            .post(END_POINT.auth.refresh, {
              refreshToken: `Bearer ${refreshToken}`,
            })
            .then((refreshRes: AxiosResponse) => {
              accessToken = refreshRes.data.access_token;
              axios
                .get(url, { headers: { accessToken: `Bearer ${accessToken}` } })
                .then(retryRes => resolve(retryRes.data))
                .catch(err => reject(err));
            })
            .catch(err => reject(err));
        } else {
          resolve(res.data);
        }
      })
      .catch(err => reject(err));
  });
};
