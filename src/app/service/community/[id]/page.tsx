'use client';

import { useEffect, useState } from 'react';
import { useOnePostState } from '@/store/community/postsStore';

import HEADER from '@/constants/ui/common/header';
import Header from '@/app/_components/common/Header';
import PostDetail from '@/app/service/community/[id]/_components/PostDetail';
import getPostDetail from '@/app/service/community/[id]/api/getPostDetail';
import CommentList from '@/app/service/community/[id]/_components/comment/CommentList';
import Form from '@/app/_components/common/Form';

function Page({ params }: { params: { id: string } }) {
  const { title, content, setTitle, setContent } = useOnePostState();
  const { id } = params;
  const postId = Number(id);
  const [postDetail, setPostDetail] = useState<PostDetailProps>();
  const [isEditButtonClicked, setIsEditButtonClicked] = useState(false);

  const editHandler = () => {
    setIsEditButtonClicked(isEditButtonClicked => !isEditButtonClicked);
  };

  useEffect(() => {
    const fetchPostDetail = () => {
      getPostDetail(postId).then(response => setPostDetail(response));
    };

    setTitle(title);
    setContent(content);

    fetchPostDetail();
  }, [content, postId, setContent, setTitle, title]);

  return (
    <section>
      <Header
        title={isEditButtonClicked ? HEADER.edit : HEADER.community}
        isEllipsis={postDetail?.is_mine && !isEditButtonClicked}
        isBack={!isEditButtonClicked}
        isExit={isEditButtonClicked}
        exitHandler={editHandler}
        editHandler={editHandler}
      />
      <div className="flex flex-col  relative h-full-size-omit-nav">
        {!isEditButtonClicked && postDetail && <PostDetail {...postDetail} />}
        {!isEditButtonClicked && <CommentList postId={postId} />}
        {isEditButtonClicked && (
          <Form
            postId={postId}
            category={postDetail?.category}
            title={postDetail?.title}
            content={postDetail?.content}
            images={postDetail?.images}
            editHandler={editHandler}
            isPostDetail
          />
        )}
      </div>
    </section>
  );
}

export default Page;
