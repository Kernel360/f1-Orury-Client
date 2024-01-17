import { PostDetailProps } from '@/types/community/post';

import User from '@/app/service/community/_components/User';
import Counts from '@/app/service/community/_components/Counts';

function PostDetail({ ...props }: PostDetailProps) {
  const {
    user_profile_image,
    user_nickname,
    created_at,
    is_like,
    title,
    content,
    like_count,
    comment_count,
    view_count,
    id,
  } = props;

  return (
    <div className="flex flex-col gap-4 border-b-4 border-b-grey-200 p-4">
      <User
        user_profile_image={user_profile_image}
        user_nickname={user_nickname}
        created_at={created_at}
        is_like={is_like}
        post_id={id}
      />
      <div className="flex flex-col gap-4">
        <span className="font-bold text-xl">{title}</span>
        <span>{content}</span>
      </div>
      <div className="flex justify-evenly">
        <Counts
          postId={id}
          likes={like_count}
          comments={comment_count}
          views={view_count}
          size={16}
        />
      </div>
    </div>
  );
}

export default PostDetail;
