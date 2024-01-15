'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpCircle } from 'lucide-react';
import postComment from '@/app/service/community/[id]/api/postComment';
import { useParams } from 'next/navigation';
import { TResponse } from '@/types/common/response';
import { CommentListData } from '@/types/community/comment';
import useCommentStore from '@/store/community/commentStore';
import useSWRInfinite from 'swr/infinite';
import { getCommentKey } from '@/utils/getKeys';
import { fetcher } from '@/utils/fetcher';

function CommentInput() {
  const params = useParams<{ id: string }>();
  const postId = Number(params.id);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [content, setContent] = useState('');
  const { isReplyMode, setIsFocus, parentId, isFocus } = useCommentStore();
  const { mutate } = useSWRInfinite<TResponse<CommentListData>>(
    (pageIndex, previousPageData) =>
      getCommentKey(postId, pageIndex, previousPageData),
    fetcher,
    { revalidateFirstPage: false },
  );

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
