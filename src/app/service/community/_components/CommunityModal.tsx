import useIntersect from '@/hooks/common/useIntersection';
import OnePost from '@/app/service/community/_components/OnePost';
import NotSearched from '@/app/service/community/_components/NotSearched';
import usePostListApi from '@/hooks/community/usePostList';

import { CommunityModalProps } from '@/types/user';

function CommunityModal({ ...props }: CommunityModalProps) {
  const { searchText } = props;
  const { data, size, setSize, isValidating } =
    usePostListApi.useGetSearchPostList(searchText);
  const posts = data ? data.flatMap(page => page.data.data.posts) : [];
  const bottomRef = useIntersect(() => {
    if (!isValidating) setSize(size + 1);
  });

  return (
    <section className="opacity-100 top-0 translate-y-0 z-9 bg-white pt-28 px-4 pb-4 absolute overflow-y-auto transition-transform duration-300 w-full h-[calc(100vh-3.5rem)]">
      {searchText ? (
        <>
          <ul>{posts?.map(post => <OnePost key={post.id} {...post} />)}</ul>
          <div ref={bottomRef} />
        </>
      ) : (
        <NotSearched content="검색어를 입력하여 글을 검색해보세요!" />
      )}
    </section>
  );
}

export default CommunityModal;
