import { INVALID_MESSAGE } from '@/constants/community/comment';
import * as z from 'zod';

const { comment } = INVALID_MESSAGE;

export const CommentSchema = z.object({
  content: z
    .string()
    .min(1, { message: comment.min })
    .max(50, { message: comment.max }),
});

export type CommentSchemaType = z.infer<typeof CommentSchema>;
