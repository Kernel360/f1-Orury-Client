'use client';

import Button from '@/app/ui/buttons/Button';
import { SIGNUP_BUTTON } from '@/constants/signup';
import useSignupState from '@/store/signup/signupStore';
import Banner from '@/app/signup/_components/Banner';
import Gender from '@/app/signup/_components/Gender';

function Page() {
  const { isValidBirth, isValidGender } = useSignupState();
  const clickHandler = () => {};

  return (
    <section className="flex flex-col justify-between bg-white h-full mb-safe">
      <div>
        <Banner />
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
