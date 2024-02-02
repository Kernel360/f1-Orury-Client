import { decrypt } from '@/utils/crypto';
import type { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { getCookie } from '../cookie';
import { ERROR_CODE, STATUS_CODE } from '@/constants/api/statusCode';
import { axiosInstance } from './axios-instance';
import { getNewAccessToken } from '@/apis/auth/getNewAccessToken';

export interface ErrorResponseData {
  statusCode: number;
  message: string;
  code: number;
}

export const checkAndSetToken = (config: InternalAxiosRequestConfig) => {
  if (!config.useAuth || config.headers.Authorization) return config;

  const accessToken = decrypt(getCookie({ name: 'access_token' }));

  if (!accessToken) {
    // 엑세스 토큰이 없을 때의 로직
    throw new Error('토큰이 유효하지 않습니다');
  }

  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
};

export const handleError = async (error: AxiosError<ErrorResponseData>) => {
  const originalRequest = error.config;

  if (!error.response || !originalRequest)
    throw new Error('에러가 발생했습니다.');

  const { data, status } = error.response;

  if (data.code !== ERROR_CODE.invalidEmail) {
  }

  if (status === STATUS_CODE.unauthorized) {
    const newAccessToken = await getNewAccessToken();
    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

    return axiosInstance(originalRequest);
  }
};
