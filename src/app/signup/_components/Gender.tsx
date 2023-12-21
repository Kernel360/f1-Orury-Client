'use client';

import { useState } from 'react';
import { GENDER } from '@/constants/signup';
import Button from '@/app/ui/buttons/Button';
import useSignupState from '@/store/signup/signupStore';
import Check from '@/app/signup/_components/Check';

function Gender() {
  const [isChecked, setIsChecked] = useState(false);
  const [genderIdx, setGenderIdx] = useState(0);
  const { setIsValidGender } = useSignupState();

  const maleClickHandler = () => {
    setGenderIdx(GENDER.manIdx);
    setIsChecked(true);
    setIsValidGender(true);
  };

  const femaleClickHandler = () => {
    setGenderIdx(GENDER.womanIdx);
    setIsChecked(true);
    setIsValidGender(true);
  };

  return (
    <div className="flex flex-col px-4 gap-2">
      <div className="flex gap-1 text-grey-800 text-lg">
        <span>{GENDER.label}</span>
        <Check isChecked={isChecked} />
      </div>
      <div className="flex gap-4">
        <Button
          handler={maleClickHandler}
          content={GENDER.man}
          color={genderIdx === GENDER.manIdx ? 'primary' : 'disabled'}
          outline
        />
        <Button
          handler={femaleClickHandler}
          content={GENDER.woman}
          color={genderIdx === GENDER.womanIdx ? 'primary' : 'disabled'}
          outline
        />
      </div>
    </div>
  );
}

export default Gender;
