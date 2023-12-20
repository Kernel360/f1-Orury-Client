import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
});
