import { INVALID_MESSAGE } from '@/constants/common/form';
import * as z from 'zod';

const { category, title, content } = INVALID_MESSAGE;

export const FormSchema = z.object({
  category: z.number({
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

export const ReviewSchema = z.object({
  content: z.string().optional(),
});

export type ReviewSchemaType = z.infer<typeof ReviewSchema>;
