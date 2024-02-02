'use client';

import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { setTokensInCookies } from '@/utils/setTokensInCookies';
import { FormSchemaType, formSchema } from '@/app/sign-up/schema';
import {
  BIRTHDAY_INPUT,
  GENDER_INPUT,
  NICKNAME_INPUT,
  rBirthform,
} from '@/constants/sign-up';

import Button from '@/app/_components/buttons/Button';
import useUserStore from '@/store/user/userStore';
import postSignUp from '@/app/sign-up/api/postSignUp';
import CALLBACK_URL from '@/constants/url';

function SignUpForm() {
  const router = useRouter();
  const { signUpType, email, profile_image } = useUserStore();
  const {
    handleSubmit,
    register,
    setValue,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const formatBirthValue = (value: string) => {
    const formattedValue = value.replace(rBirthform, '$1-$2-$3');
    setValue('birthday', formattedValue);

    return formattedValue;
  };

  const handleButtonClick = (gender: number) => {
    setValue('gender', gender);
    trigger('gender');
  };

  const onSubmit: SubmitHandler<FormSchemaType> = async formData => {
    const response = await postSignUp({
      ...formData,
      sign_up_type: signUpType,
      email,
      profile_image,
    });

    if (response && response.data) {
      setTokensInCookies({
        accessToken: response.data.access_token,
        refreshToken: response.data.refresh_token,
      });
    }

    router.push(CALLBACK_URL.service);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col px-4 pt-4 pb-4 justify-between h-[60dvh]"
    >
      <div className="flex flex-col gap-4">
        {/* 닉네임 */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            {NICKNAME_INPUT.label}
            {errors.nickname && (
              <p className="text-warning text-sm leading-5">
                {errors.nickname.message}
              </p>
            )}
          </div>
          <input
            {...register('nickname')}
            className={`outline-none border-b-2 focus:border-b-primary ${
              errors.birthday && 'border-b-warning focus:border-b-warning'
            }`}
            type={NICKNAME_INPUT.type}
            placeholder={NICKNAME_INPUT.placeholder}
            onChange={e => {
              setValue('nickname', e.target.value);
            }}
            onBlur={() => trigger('nickname')}
          />
        </div>

        {/* 생년월일 */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            {BIRTHDAY_INPUT.label}
            {errors.birthday && (
              <p className="text-warning text-sm leading-5">
                {errors.birthday.message}
              </p>
            )}
          </div>
          <input
            {...register('birthday')}
            className={`outline-none border-b-2 focus:border-b-primary ${
              errors.birthday && 'border-b-warning focus:border-b-warning'
            }`}
            type={BIRTHDAY_INPUT.type}
            placeholder={BIRTHDAY_INPUT.placeholder}
            onChange={e => {
              const formattedValue = formatBirthValue(e.target.value);
              setValue('birthday', formattedValue);
            }}
            onBlur={() => trigger('birthday')}
          />
        </div>

        {/* 성별 */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            {GENDER_INPUT.label}
            {errors.gender && (
              <p className="text-warning text-sm">{errors.gender.message}</p>
            )}
          </div>
          <div className="flex gap-4">
            <Button
              outline
              content={GENDER_INPUT.man}
              onClick={() => handleButtonClick(GENDER_INPUT.manIdx)}
              color={
                getValues('gender') === GENDER_INPUT.manIdx
                  ? 'primary'
                  : 'disabled'
              }
            />
            <Button
              outline
              content={GENDER_INPUT.woman}
              onClick={() => handleButtonClick(GENDER_INPUT.womanIdx)}
              color={
                getValues('gender') === GENDER_INPUT.womanIdx
                  ? 'primary'
                  : 'disabled'
              }
            />
          </div>
        </div>
      </div>

      <Button onClick={() => {}} content="회원 가입" color="primary" submit />
    </form>
  );
}

export default SignUpForm;
