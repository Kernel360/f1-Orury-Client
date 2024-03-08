import { END_POINT } from '@/constants/api/end-point';
import { getCookie } from '@/lib/cookie';
import axios, { AxiosResponse } from 'axios';
import { decrypt } from '@/utils/crypto';

let accessToken = decrypt(getCookie({ name: 'access_token' }));
const refreshToken = decrypt(getCookie({ name: 'refresh_token' }));

export const getFetcher = (url: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          withCredentials: true,
        },
      })
      .then(res => {
        if (res.status === 900) {
          axios
            .post(END_POINT.auth.refresh, {
              Authorization: `Bearer ${refreshToken}`,
            })
            .then((refreshRes: AxiosResponse) => {
              accessToken = refreshRes.data.access_token;
              axios
                .get(url, {
                  headers: { Authorization: `Bearer ${accessToken}` },
                })
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

export const postFetcher = (url: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          withCredentials: true,
        },
      })
      .then(res => {
        if (res.status === 900) {
          axios
            .post(END_POINT.auth.refresh, {
              Authorization: `Bearer ${refreshToken}`,
            })
            .then((refreshRes: AxiosResponse) => {
              accessToken = refreshRes.data.access_token;
              axios
                .post(url, {
                  headers: { Authorization: `Bearer ${accessToken}` },
                })
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
