export const SIGN_UP_TYPE = {
  kakao: {
    index: 1,
    name: '카카오',
  },
  apple: {
    index: 2,
    name: 'Apple',
  },
} as const;

export const SIGN_UP_ERROR_MESSAGES = {
  default:
    '로그인 과정에서 문제가 생겼습니다. 같은 문제가 반복된다면 앱 삭제 후 다시 설치해주세요.',
  noAuthToken: '로그인 유효시간을 초과했습니다. 다시 시도해주세요.',
};
