'use client';

import useCommentStore from '@/store/community/commentStore';
import editComment from '@/app/service/community/[id]/api/editComment';
import useCommentListInfinite from '@/hooks/community/useCommentListInfinite';

import { Check, X } from 'lucide-react';
import { useToast } from '@/app/_components/ui/use-toast';
import { ChangeEvent, useMemo, useState } from 'react';
import type { ModifyContentProps } from '@/types/community/comment';

function ModifyContent({ ...props }: ModifyContentProps) {
  const { comment_id, post_id, content } = props;
  const { toast } = useToast();
  const { setCommentId, commentId, isEditMode, setIsEditMode } =
    useCommentStore();
  const [contentValue, setContentValue] = useState(content);
  const [isToggled, setIsToggled] = useState(false);
  const beforeValue = content;

  const { mutate } = useCommentListInfinite(post_id);

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = '2em';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  useMemo(() => {
    if (comment_id === commentId && isEditMode) {
      setIsToggled(isToggled => !isToggled);
    }
  }, [comment_id, commentId, isEditMode]);

  const inputHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContentValue(event.target.value);
  };

  const cancelHandler = () => {
    setCommentId(comment_id);
    setContentValue(beforeValue);
    setIsToggled(false);
    setCommentId(0);
    setIsEditMode(false);
  };

  const editHandler = async () => {
    setCommentId(comment_id);
    setIsToggled(false);
    await editComment({ id: comment_id, content: contentValue });
    setCommentId(0);
    mutate();
    setIsEditMode(false);
    toast({
      title: '댓글 수정',
      description: '댓글 수정이 완료되었습니다!',
      variant: 'success',
    });
  };

  return (
    <div>
      {isToggled && (
        <div className="flex w-full relative justify-between gap-4">
          <textarea
            placeholder={content}
            defaultValue={content}
            onChange={inputHandler}
            rows={1}
            onInput={handleInput}
            className="flex flex-wrap w-full h-auto resize-none overflow-hidden outline-none border-b border-b-grey-200 focus:border-b-primary
      min-h-2em max-h-8em h-2em box-border"
          />

          <div className="flex gap-3  justify-end pr-2">
            <X
              onClick={cancelHandler}
              size={20}
              strokeWidth={2.5}
              color="#DA0000"
              className="cursor-pointer"
            />
            <Check
              color="#855AFF"
              size={20}
              strokeWidth={2.5}
              onClick={editHandler}
              className="cursor-pointer"
            />
          </div>
        </div>
      )}

      {!isToggled && <span className="flex items-center">{contentValue}</span>}
    </div>
  );
}

export default ModifyContent;
