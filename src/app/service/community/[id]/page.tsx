import getPostDetail from '@/app/service/community/[id]/api/getPostDetail';
import User from '@/app/service/community/_components/User';
import Counts from '@/app/service/community/_components/Counts';
import Comment from '@/app/service/community/_components/comment/Comment';
import CommentBar from '@/app/service/community/_components/comment/CommentBar';
import { commentsMock } from '@/__mock__/data/comment.mock';

async function Page({ params }: { params: { id: string } }) {
  const details = await getPostDetail(params.id);

  return (
    <div className="flex flex-col justify-between relative h-screen">
      <div>
        <div className="flex flex-col gap-4 border-b-8 border-b-grey-200 p-4">
          <User
            user_profile_image={details.user_profile_image}
            user_nickname={details.user_nickname}
            created_at={details.created_at}
            is_like={details.is_like}
          />
          <div className="flex flex-col gap-4">
            <span className="font-bold text-xl">{details.title}</span>
            <span>{details.content}</span>
          </div>
          <div className="flex justify-evenly">
            <Counts
              likes={details.like_count}
              comments={details.comment_count}
              views={details.view_count}
              size={16}
            />
          </div>
        </div>
        {commentsMock.map(value => (
          <Comment key={value.id} {...value} />
        ))}
      </div>
      <CommentBar />
    </div>
  );
}

export default Page;
