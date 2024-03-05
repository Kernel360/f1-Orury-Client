import { INVALID_MESSAGE } from '@/constants/common/form';
import * as z from 'zod';

const { category, title, content } = INVALID_MESSAGE;

export const FormSchema = z.object({
  category: z.number({
    required_error: category,
  }),
  title: z
    .string({ required_error: title.min })
    .min(1, { message: title.min })
    .max(30, { message: title.max }),
  content: z
    .string({ required_error: content.min })
    .min(1, { message: content.min })
    .max(300, { message: content.max }),
});

export type FormSchemaType = z.infer<typeof FormSchema>;

export const ReviewSchema = z.object({
  content: z.string().optional(),
});

export type ReviewSchemaType = z.infer<typeof ReviewSchema>;
