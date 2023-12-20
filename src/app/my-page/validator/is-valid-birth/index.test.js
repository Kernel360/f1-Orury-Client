import isValidBirth from './index';

describe('생년월일 입력 테스트', () => {
  test.each([
    ['1999-01-01', true],
    ['2023-01-01', true],
    ['1899-12-31', false],
    ['2100-12-31', false],
  ])('유효한 생년월일일 경우, true를 반환한다.', (input, expected) => {
    expect(isValidBirth(input)).toBe(expected);
  });
});
