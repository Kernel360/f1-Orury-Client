'use client';

import { v4 } from 'uuid';
import { useMemo, useState } from 'react';
import { CommentProps } from '@/types/community/comment';

import useIntersect from '@/hooks/common/useIntersection';
import OneComment from '@/app/service/community/[id]/_components/comment/OneComment';
import CommentInput from '@/app/service/community/[id]/_components/comment/CommentInput';
import useCommentListInfinite from '@/hooks/community/useCommentListInfinite';

function CommentList({ postId }: { postId: number }) {
  const [commentList, setCommentList] = useState<CommentProps[] | undefined>(
    [],
  );

  const { data, size, setSize, isValidating } = useCommentListInfinite(postId);

  useMemo(() => {
    setCommentList(data?.flatMap(page => page.data.comments));
  }, [data, setCommentList]);

  const bottomRef = useIntersect(() => {
    if (!isValidating && data && data[data.length - 1].data.cursor !== -1) {
      setSize(size + 1);
    }
  });

  return (
    <div className="bg-white flex justify-between flex-col h-full">
      <ul className="pb-12">
        {commentList?.map(comment => (
          <OneComment key={v4()} post_id={postId} {...comment} />
        ))}
        <div ref={bottomRef} />
      </ul>
      <CommentInput />
    </div>
  );
}

export default CommentList;
