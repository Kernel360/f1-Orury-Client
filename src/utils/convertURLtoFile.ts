/**
 * @param url File 객체로 변환할 imageUrl을 받아옵니다.
 * @returns File 객체를 반환합니다.
 */

import { getCookie } from '@/lib/cookie';
import axios from 'axios';
import { decrypt } from './crypto';

const accessToken = decrypt(getCookie({ name: 'access_token' }));

export const convertURLtoFile = async (url: string) => {
  const response = await axios.get(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
    responseType: 'blob',
  });
  const data = new Blob([response.data]);
  const ext = url.split('.').pop();
  const filename = url.split('/').pop();
  const metadata = { type: `image/${ext}` };
  const file = new File([data], filename!, metadata);
  return file;
};
