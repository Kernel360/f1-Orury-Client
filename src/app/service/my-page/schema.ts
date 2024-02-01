import { INVALID_MESSAGE } from '@/constants/my-page';
import * as z from 'zod';

const { nickname } = INVALID_MESSAGE;

export const FormSchema = z.object({
  id: z.number(),
  nickname: z.string({
    required_error: nickname,
  }),
});

export type FormSchemaType = z.infer<typeof FormSchema>;
