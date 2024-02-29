import { BACK_URL } from '@/constants/api';
import axios from 'axios';
import { checkAndSetToken, handleError } from './interceptor';

export const axiosInstance = axios.create({
  baseURL: BACK_URL,
  timeout: 10 * 1000,
  withCredentials: true,
  useAuth: true,
});

axiosInstance.interceptors.request.use(checkAndSetToken, handleError);

axiosInstance.interceptors.response.use(response => response, handleError);
