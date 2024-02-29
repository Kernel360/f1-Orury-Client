import { INVALID_MESSAGE } from '@/constants/sign-up';
import { z } from 'zod';

export const formSchema = z.object({
  birthday: z.string().refine(
    value => {
      const dateValue = new Date(value);
      const minDate = new Date('1900-01-01');
      const maxDate = new Date();

      const regex = /^\d{4}-\d{2}-\d{2}$/;
      const isValidFormat = regex.test(value);

      return isValidFormat && dateValue > minDate && dateValue <= maxDate;
    },
    { message: INVALID_MESSAGE.birth },
  ),
  gender: z.number({ required_error: INVALID_MESSAGE.gender }),
  nickname: z
    .string()
    .refine(value => value.length >= 2 && value.length <= 8, {
      message: INVALID_MESSAGE.nickname,
    })
    .transform(value => value.trim()),
});

export type FormSchemaType = z.infer<typeof formSchema>;
