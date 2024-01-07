import HEADER from '@/constants/ui/common/header';
import Header from '@/app/_components/common/Header';
import Comment from '@/app/service/community/_components/comment/Comment';
import CommentBar from '@/app/service/community/_components/comment/CommentBar';
import PostDetail from '@/app/service/community/[id]/_components/PostDetail';
import { commentsMock } from '@/__mock__/data/comment.mock';
import { postMock } from '@/__mock__/data/post.mock';

async function Page() {
  return (
    <section>
      <Header title={HEADER.community} isEllipsis={postMock.is_writer} isBack />
      <div className="flex flex-col justify-between relative h-full-size-omit-nav">
        <div>
          <PostDetail {...postMock} />
          {commentsMock.map(value => (
            <Comment key={value.id} {...value} />
          ))}
        </div>
        <CommentBar />
      </div>
    </section>
  );
}

export default Page;
