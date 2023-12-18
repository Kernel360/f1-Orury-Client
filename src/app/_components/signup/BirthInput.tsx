'use client';

import {
  BIRTHDAY_INPUT,
  INVALID_MESSAGE,
  rBirthform,
} from '@/constants/signup';
import { isValidBirth } from '@/validator/index';
import { useEffect, useState } from 'react';
import Check from '@/app/_components/signup/Check';
import useSignupState from '@/store/signup/signupStore';

function BirthInput() {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const { setIsValidBirth } = useSignupState();
  const { label, type, placeholder, maxLength } = BIRTHDAY_INPUT;

  // 대시 입력 공백으로 치환
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const replacedValue = event.target.value.replace(/-/g, '');

    if (replacedValue.length <= maxLength) setInputValue(replacedValue);
  };

  // onBlur에 따라 생년월일 입력 유효성 검사
  const handleBlur = () => {
    const isValidInput = isValidBirth(inputValue);
    setIsValid(isValidInput);
    setIsChecked(isValidInput);
    setIsValidBirth(isValidInput);
  };

  useEffect(() => {
    if (inputValue.length === maxLength) {
      setInputValue(inputValue.replace(rBirthform, '$1-$2-$3'));
    }
  }, [inputValue, maxLength]);

  return (
    <label className="flex flex-col px-4 gap-2 mt-4 mb-8">
      <div className="flex gap-1 text-grey-800 text-lg">
        {label}
        <Check isChecked={isChecked} />
      </div>
      <input
        className={`outline-none border-b-2 ${
          isChecked ? 'border-primary' : 'border-b-disabled'
        }`}
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
      {!isValid && (
        <span className="text-warning text-sm">{INVALID_MESSAGE.birth}</span>
      )}
    </label>
  );
}

export default BirthInput;
