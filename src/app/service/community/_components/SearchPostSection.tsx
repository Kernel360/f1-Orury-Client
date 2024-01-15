import { TResponse } from '@/types/common/response';
import { PostListData } from '@/types/community/post';
import { END_POINT } from '@/constants/api/end-point';
import { BACK_URL } from '@/constants/api';
import { fetcher } from '@/utils/fetcher';

import useSWRInfinite from 'swr/infinite';
import useIntersect from '@/hooks/common/useIntersection';
import OnePost from '@/app/service/community/_components/OnePost';
import NotSearched from '@/app/service/community/_components/NotSearched';

const getKey = (
  searchText: string,
  pageIndex: number,
  previousPageData: TResponse<PostListData>,
) => {
  if (previousPageData && previousPageData.data.cursor === -1) return null;

  if (!previousPageData && pageIndex === 0) {
    return BACK_URL + END_POINT.post.getSearchList(searchText, 0);
  }

  return (
    BACK_URL +
    END_POINT.post.getSearchList(searchText, previousPageData.data.cursor)
  );
};

function SearchPostSection({ searchText }: { searchText: string }) {
  const { data, size, setSize, isValidating } = useSWRInfinite<
    TResponse<PostListData>
  >(
    (pageIndex, previousPageData) =>
      getKey(searchText, pageIndex, previousPageData),
    fetcher,
    { revalidateFirstPage: false },
  );
  const posts = data?.flatMap(page => page.data.posts);
  const bottomRef = useIntersect(() => {
    if (!isValidating) {
      setSize(size + 1);
    }
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

export default SearchPostSection;
