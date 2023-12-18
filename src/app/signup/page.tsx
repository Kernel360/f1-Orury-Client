'use client';

import Banner from '@/app/_components/signup/Banner';
import BirthInput from '@/app/_components/signup/BirthInput';
import Gender from '@/app/_components/signup/Gender';
import Button from '@/app/_components/ui/buttons/Button';
import { SIGNUP_BUTTON } from '@/constants/signup';
import useSignupState from '@/store/signup/signupStore';

function Page() {
  const { isValidBirth, isValidGender } = useSignupState();
  const clickHandler = () => {};

  return (
    <section className="flex flex-col justify-between bg-white h-full mb-safe">
      <div>
        <Banner />
        <BirthInput />
        <Gender />
      </div>
      <div className="mx-4 pb-4">
        <Button
          handler={clickHandler}
          content={SIGNUP_BUTTON.content}
          disabled={!(isValidBirth && isValidGender)}
          color="primary"
        />
      </div>
    </section>
  );
}

export default Page;
