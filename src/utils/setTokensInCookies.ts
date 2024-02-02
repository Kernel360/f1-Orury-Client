import { setCookie } from '@/lib/cookie';
import { encrypt } from '@/utils/crypto';
import { SetTokensInCookiesProps } from '@/types/sign-up';

/**
 * 암호화된 access_token과 refresh_token을 쿠키에 설정합니다.
 *
 * @param {string} accessToken - 'access_token' 쿠키에 저장될 액세스 토큰
 * @param {string} refreshToken - 'refresh_token' 쿠키에 저장될 리프레시 토큰
 *
 * @returns {void}
 */
export const setTokensInCookies = ({
  accessToken,
  refreshToken,
}: SetTokensInCookiesProps) => {
  setCookie({
    name: 'access_token',
    value: encrypt(accessToken),
    options: { path: '/' },
  });
  setCookie({
    name: 'refresh_token',
    value: encrypt(refreshToken),
    options: { path: '/' },
  });
};
