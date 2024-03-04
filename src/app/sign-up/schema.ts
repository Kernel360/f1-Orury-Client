import { INVALID_MESSAGE } from '@/constants/sign-up';
import { z } from 'zod';

export const formSchema = z.object({
  birthday: z
    .string({
      required_error: INVALID_MESSAGE.birth,
      invalid_type_error: INVALID_MESSAGE.birth,
    })
    .min(1, { message: INVALID_MESSAGE.birth }),
  gender: z.number({ required_error: INVALID_MESSAGE.gender }),
  nickname: z
    .string()
    .refine(value => value.length >= 2 && value.length <= 8, {
      message: INVALID_MESSAGE.nickname,
    })
    .transform(value => value.trim()),
});

export type FormSchemaType = z.infer<typeof formSchema>;
