'use client';

import { v4 } from 'uuid';
import { PostListData } from '@/types/community/post';
import { usePostsState } from '@/store/community/postsStore';
import { fetcher } from '@/utils/fetcher';
import { TResponse } from '@/types/common/response';
import { getPostListKey } from '@/utils/getKeys';

import useIntersect from '@/hooks/common/useIntersection';
import PostListSkeleton from '@/app/service/community/_components/PostListSkeleton';
import NotSearched from '@/app/service/community/_components/NotSearched';
import OnePost from '@/app/service/community/_components/OnePost';
import useSWRInfinite from 'swr/infinite';

function PostList() {
  const { categoryId } = usePostsState();
  const { data, size, setSize, isLoading, isValidating } = useSWRInfinite<
    TResponse<PostListData>
  >(
    (pageIndex, previousPageData) =>
      getPostListKey(categoryId, pageIndex, previousPageData),
    fetcher,
    { revalidateFirstPage: false },
  );
  const posts = data?.flatMap(page => page.data.posts);
  const bottomRef = useIntersect(() => {
    if (!isValidating && data && data[data.length - 1].data.cursor !== -1) {
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
        <div ref={bottomRef} />
      </ul>
    </div>
  );
}

export default PostList;
