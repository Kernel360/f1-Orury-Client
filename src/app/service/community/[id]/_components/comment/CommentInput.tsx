'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpCircle } from 'lucide-react';
import postComment from '@/app/service/community/[id]/api/postComment';
import { useParams } from 'next/navigation';

import useCommentStore from '@/store/community/commentStore';
import useCommentListInfinite from '@/hooks/community/useCommentListInfinite';

function CommentInput() {
  const params = useParams<{ id: string }>();
  const postId = Number(params.id);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [content, setContent] = useState('');
  const { isReplyMode, setIsFocus, parentId, isFocus } = useCommentStore();
  const { mutate } = useCommentListInfinite(postId);

  useEffect(() => {
    if (inputRef.current && isFocus) {
      inputRef.current.focus();
    }
  }, [isFocus, isReplyMode]);

  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const commentClickHandler = async () => {
    await postComment({ content, parent_id: parentId, post_id: postId });
    await mutate();

    setContent('');
    setIsFocus(false);
  };

  const onBlurHandler = () => {
    setIsFocus(false);
  };

  return (
    <section className="sticky bottom-12 left-0">
      <input
        ref={inputRef}
        className="w-full py-3 pl-4 pr-10 rounded-2xl outline-none bg-grey-50 placeholder:text-grey-500 caret-primary border-2 border-grey-100 focus:border-2 focus:border-primary"
        placeholder="댓글을 입력하세요."
        onChange={onChangeText}
        onBlur={onBlurHandler}
        value={content}
      />
      <button
        type="button"
        onClick={commentClickHandler}
        className="absolute right-3.5 top-3 cursor-pointer"
      >
        <ArrowUpCircle size={28} color="#855AFF" />
      </button>
    </section>
  );
}

export default CommentInput;
