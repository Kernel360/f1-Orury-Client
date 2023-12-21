'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '@/app/ui/buttons/Button';
import {
  BIRTHDAY_INPUT,
  GENDER,
  INVALID_MESSAGE,
  rBirthform,
} from '@/constants/signup';

function SignUpForm() {
  // Zod 스키마 정의
  const formSchema = z.object({
    birthday: z.string().refine(
      value => {
        const dateValue = new Date(value);
        const minDate = new Date('1900-01-01');
        const maxDate = new Date();

        return dateValue >= minDate && dateValue <= maxDate;
      },
      { message: INVALID_MESSAGE.birth },
    ),
    gender: z.number({ required_error: INVALID_MESSAGE.gender }),
  });

  type FormSchemaType = z.infer<typeof formSchema>;

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

  const onSubmit: SubmitHandler<FormSchemaType> = data => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col px-4 pt-4 pb-16 justify-between h-[60dvh]"
    >
      <div className="flex flex-col gap-3">
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

        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            {GENDER.label}
            {errors.gender && (
              <p className="text-warning text-sm">{errors.gender.message}</p>
            )}
          </div>
          <div className="flex gap-4">
            <Button
              outline
              content={GENDER.man}
              handler={() => handleButtonClick(GENDER.manIdx)}
              color={
                getValues('gender') === GENDER.manIdx ? 'primary' : 'disabled'
              }
            />
            <Button
              outline
              content={GENDER.woman}
              handler={() => handleButtonClick(GENDER.womanIdx)}
              color={
                getValues('gender') === GENDER.womanIdx ? 'primary' : 'disabled'
              }
            />
          </div>
        </div>
      </div>

      <Button handler={() => {}} content="회원 가입" color="primary" submit />
    </form>
  );
}

export default SignUpForm;
