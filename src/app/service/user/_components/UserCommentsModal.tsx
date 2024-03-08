import useIntersect from '@/hooks/common/useIntersection';
import OnePost from '@/app/service/community/_components/OnePost';
import NotSearched from '@/app/service/community/_components/NotSearched';
import usePostListApi from '@/hooks/community/usePostList';

import { UserModalProps } from '@/types/user';

function UserCommentModal({ ...props }: UserModalProps) {
  const { user_profile_image, user_nickname, user_id } = props;
  const { data, size, setSize, isValidating } =
    usePostListApi.useGetMyPostList('comment');

  const posts = data?.flatMap(page => page.data.data.list);
  const cursor = data?.flatMap(page => page.data.data.cursor);
  const bottomRef = useIntersect(() => {
    if (!isValidating) setSize(size + 1);
  });

  return (
    <section className="opacity-100 top-0 translate-y-0 z-9 bg-white pt-10 px-4 pb-4 absolute overflow-y-auto transition-transform duration-300 w-full h-full z-[2]">
      {cursor && cursor[0] !== -2 ? (
        <>
          <ul>
            {posts?.map(post => (
              <OnePost
                key={post.id}
                {...{ ...post, user_profile_image, user_nickname, user_id }}
              />
            ))}
          </ul>
          <div ref={bottomRef} />
        </>
      ) : (
        <NotSearched content="나의 댓글이 존재하지 않습니다." />
      )}
    </section>
  );
}

export default UserCommentModal;
