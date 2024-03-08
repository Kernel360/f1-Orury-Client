'use client';

import Button from '@/app/_components/buttons/Button';
import useUserStore from '@/store/user/userStore';
import postSignUp from '@/app/sign-up/api/postSignUp';
import CALLBACK_URL from '@/constants/url';
import TosSummary from '@/app/sign-up/_components/TosSummary';
import Datepicker from 'react-tailwindcss-datepicker';

import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { setTokensInCookies } from '@/utils/setTokensInCookies';
import { FormSchemaType, formSchema } from '@/app/sign-up/schema';
import { useToast } from '@/app/_components/ui/use-toast';
import {
  BIRTHDAY_INPUT,
  GENDER_INPUT,
  NICKNAME_INPUT,
} from '@/constants/sign-up';
import type { DateValueType, TosProps } from '@/types/sign-up';
import { useState } from 'react';

function SignUpForm({ handleOpenModal }: TosProps) {
  const [dateValue, setDateValue] = useState<DateValueType>({
    startDate: '',
    endDate: '',
  });

  const router = useRouter();
  const { toast } = useToast();
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

  const handleButtonClick = (gender: number) => {
    setValue('gender', gender);
    trigger('gender');
  };

  const handleValueChange = (value: DateValueType) => {
    if (value?.startDate) setValue('birthday', value.startDate.toString());
    setDateValue(value);
    trigger('birthday');
  };

  const onSubmit: SubmitHandler<FormSchemaType> = async formData => {
    const response = await postSignUp({
      ...formData,
      sign_up_type: signUpType,
      email,
      profile_image,
    });

    // 회원가입에 성공했을 때
    if (response && response.data) {
      // 응답으로 온 토큰 저장
      setTokensInCookies({
        accessToken: response.data.access_token,
        refreshToken: response.data.refresh_token,
      });

      // 세션 스토리지 내 auth token 삭제
      sessionStorage.clear();

      // 회원가입 성공 토스트 출력
      toast({
        variant: 'success',
        description: response?.message,
        duration: 2000,
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
              errors.nickname && 'border-b-warning focus:border-b-warning'
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
          <Datepicker
            {...register('birthday')}
            i18n="ko"
            placeholder={BIRTHDAY_INPUT.placeholder}
            useRange={false}
            asSingle
            primaryColor="violet"
            value={dateValue}
            onChange={handleValueChange}
            maxDate={new Date()}
            readOnly
            inputClassName={`relative p-0 ${
              errors.birthday && 'border-b-warning focus:border-b-warning'
            }`}
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
      <div className="flex flex-col gap-4">
        <TosSummary handleOpenModal={handleOpenModal} />
        <Button content="회원 가입" color="primary" submit />
      </div>
    </form>
  );
}

export default SignUpForm;
