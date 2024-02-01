import { INVALID_MESSAGE } from '@/constants/common/form';
import * as z from 'zod';

const { category, title, content } = INVALID_MESSAGE;

export const FormSchema = z.object({
  category: z.string({
    required_error: category,
  }),
  title: z.string({
    required_error: title,
  }),
  content: z.string({
    required_error: content,
  }),
});

export type FormSchemaType = z.infer<typeof FormSchema>;
