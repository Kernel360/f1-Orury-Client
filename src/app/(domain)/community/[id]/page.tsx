import getDetail from '@/app/(domain)/community/[id]/api/getDetail';
import User from '@/app/(domain)/community/_components/User';
import Counts from '@/app/(domain)/community/_components/Counts';
import Comment from '@/app/(domain)/community/_components/comment/Comment';
import CommentBar from '@/app/(domain)/community/_components/comment/CommentBar';
import { commentsMock } from '@/__mock__/data/comment.mock';

async function Page({ params }: { params: { id: string } }) {
  const details = await getDetail(params.id);

  return (
    <div className="flex flex-col justify-between relative h-screen">
      <div>
        <div className="flex flex-col gap-4 border-b-8 border-b-grey-200 p-4">
          <User
            user_profile_image={details.user_profile_image}
            user_nickname={details.user_nickname}
            created_at={details.created_at}
            isLike={details.isLike}
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
