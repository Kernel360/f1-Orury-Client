import { checked, unChecked } from '$/signup';

const SIGNUP_BUTTON = Object.freeze({
  content: '회원가입',
  color: 'primary',
});

const BIRTHDAY_INPUT = Object.freeze({
  label: '생년월일',
  placeholder: 'YYYY-MM-DD',
  type: 'text',
  alt: '체크',
  maxLength: 8,
  checked,
  unChecked,
});

const GENDER = Object.freeze({
  label: '성별',
  man: '남성',
  woman: '여성',
  manIdx: 1,
  womanIdx: 2,
});

const rBirthform = /(\d{4})(\d{2})(\d{2})/;

const INVALID_MESSAGE = Object.freeze({
  birth: '⚠ 생년월일 형식이 올바르지 않습니다.',
  gender: '⚠ 성별을 선택해주세요.',
});

export { SIGNUP_BUTTON, BIRTHDAY_INPUT, GENDER, INVALID_MESSAGE, rBirthform };
