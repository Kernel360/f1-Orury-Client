import * as z from 'zod';

export const FormSchema = z.object({
  category: z.string({
    required_error: '카테고리를 선택해주세요.',
  }),
  title: z.string({
    required_error: '글 제목을 입력해주세요.',
  }),
  content: z.string({
    required_error: '글 내용을 입력해주세요.',
  }),
});

export type FormSchemaType = z.infer<typeof FormSchema>;
