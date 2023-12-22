import { INVALID_MESSAGE } from '@/constants/signup';
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
});

export type FormSchemaType = z.infer<typeof formSchema>;
