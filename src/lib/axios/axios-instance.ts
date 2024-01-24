/* eslint-disable no-param-reassign */
import axios, { AxiosResponse } from 'axios';
import { decrypt } from '@/utils/crypto';
import { getCookie } from '@/lib/cookie';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

let accessToken = decrypt(getCookie({ name: 'access_token' }));
const refreshToken = decrypt(getCookie({ name: 'refresh_token' }));

axiosInstance.interceptors.request.use(
  req => {
    req.headers.Authorization = `Bearer ${accessToken}`;

    return req;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  res => res,
  error => {
    const originalRequest = error.config;
    // TOFIXED: 추후 에러코드 논의
    if (error.response?.status === 900 && !originalRequest.retry) {
      originalRequest.retry = true;

      return axios
        .post('/refresh', { Authorization: refreshToken })
        .then((refreshRes: AxiosResponse) => {
          accessToken = refreshRes.data.access_token;
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return axios(originalRequest);
        });
    }

    return Promise.reject(error);
  },
);
