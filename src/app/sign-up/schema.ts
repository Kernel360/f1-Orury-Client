import { INVALID_MESSAGE } from '@/constants/sign-up';
import { z } from 'zod';

export const formSchema = z.object({
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
  nickname: z.string().refine(value => value.length >= 2 && value.length <= 8, {
    message: INVALID_MESSAGE.nickname,
  }),
});

export type FormSchemaType = z.infer<typeof formSchema>;
