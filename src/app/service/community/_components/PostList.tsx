'use client';

import { v4 } from 'uuid';
import { usePostsState } from '@/store/community/postsStore';

import useIntersect from '@/hooks/common/useIntersection';
import PostListSkeleton from '@/app/service/community/_components/PostListSkeleton';
import NotSearched from '@/app/service/community/_components/NotSearched';
import OnePost from '@/app/service/community/_components/OnePost';
import usePostListApi from '@/hooks/community/usePostList';

function PostList() {
  const { categoryId } = usePostsState();
  const { data, size, setSize, isLoading, isValidating } =
    usePostListApi.useGetPostList(categoryId);

  const posts = data ? data.flatMap(page => page.data.data.posts) : [];

  const bottomRef = useIntersect(() => {
    if (
      !isValidating &&
      data &&
      data[data.length - 1]?.data.data.cursor !== -1
    ) {
      setSize(size + 1);
    }
  });

  return (
    <div>
      <ul className="px-4">
        {isLoading ? (
          <PostListSkeleton />
        ) : (
          posts?.map(post => <OnePost key={v4()} {...post} />)
        )}
        {posts && !posts?.length ? (
          <NotSearched content="게시글이 존재하지 않습니다." />
        ) : null}
      </ul>
      <div ref={bottomRef} />
    </div>
  );
}

export default PostList;
