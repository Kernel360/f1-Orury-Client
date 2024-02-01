export const SIGNUP_BUTTON = {
  content: '회원가입',
  color: 'primary',
} as const;

export const NICKNAME_INPUT = {
  label: '닉네임',
  placeholder: '닉네임을 입력해주세요.',
  type: 'text',
  maxLength: 8,
} as const;

export const BIRTHDAY_INPUT = {
  label: '생년월일',
  placeholder: 'YYYY-MM-DD',
  type: 'text',
  maxLength: 8,
} as const;

export const GENDER_INPUT = {
  label: '성별',
  man: '남성',
  woman: '여성',
  manIdx: 1,
  womanIdx: 2,
} as const;

export const rBirthform = /(\d{4})(\d{2})(\d{2})/;

export const INVALID_MESSAGE = {
  birth: '⚠ 생년월일 형식이 올바르지 않습니다.',
  gender: '⚠ 성별을 선택해주세요.',
  nickname: '⚠ 닉네임은 2글자 이상, 8글자 이하여야 합니다.',
} as const;
