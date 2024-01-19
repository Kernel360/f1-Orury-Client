import { GetCookieProps, SetCookieProps } from '@/types/common/cookie';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

/**
 * Key(name), Value(value)를 받아 Cookie 저장
 * @param {string} name cookie의 key 값
 * @param {string} value cookie의 value 값
 */
export const setCookie = ({ name, value, options }: SetCookieProps) => {
  return cookies.set(name, value, { ...options });
};

/**
 * key(name)을 받아 value를 반환
 * @param {string} name cookie의 key 값
 * @returns 해당 key에 해당하는 value 값
 */
export const getCookie = ({ name, options }: GetCookieProps) => {
  return cookies.get(name, { ...options });
};

/** Key를 받아 쿠키를 삭제
 * @param {string} name
 */
export const removeCookie = (name: string) => {
  return cookies.remove(name);
};
