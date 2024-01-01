import User from '@/app/service/community/_components/User';
import Counts from '@/app/service/community/_components/Counts';

async function PostDetail({ ...props }: PostDetailProps) {
  return (
    <div className="flex flex-col gap-4 border-b-4 border-b-grey-200 p-4">
      <User
        user_profile_image={props.user_profile_image}
        user_nickname={props.user_nickname}
        created_at={props.created_at}
        is_like={props.is_like}
      />
      <div className="flex flex-col gap-4">
        <span className="font-bold text-xl">{props.title}</span>
        <span>{props.content}</span>
      </div>
      <div className="flex justify-evenly">
        <Counts
          likes={props.like_count}
          comments={props.comment_count}
          views={props.view_count}
          size={16}
        />
      </div>
    </div>
  );
}

export default PostDetail;
