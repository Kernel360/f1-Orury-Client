import { INVALID_MESSAGE } from '@/constants/sign-up';
import * as z from 'zod';

const { nickname } = INVALID_MESSAGE;

export const FormSchema = z.object({
  nickname: z
    .string({
      required_error: nickname,
    })
    .transform(value => value.trim())
    .refine(value => value.length >= 2 && value.length <= 8, {
      message: INVALID_MESSAGE.nickname,
    }),
});

export type FormSchemaType = z.infer<typeof FormSchema>;
