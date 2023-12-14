import getDetail from '@/app/(domain)/community/[id]/api/getDetail';
import User from '@/app/_components/community/User';
import Counts from '@/app/_components/community/Counts';
import Comment from '@/app/_components/community/comment/Comment';
import CommentBar from '@/app/_components/community/comment/CommentBar';
import comment from '@/lib/comment.json';

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
        {comment.data.map(value => (
          <Comment key={value.id} {...value} />
        ))}
      </div>
      <CommentBar />
    </div>
  );
}

export default Page;
