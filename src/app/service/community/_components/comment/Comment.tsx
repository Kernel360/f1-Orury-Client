import Image from 'next/image';
import { randomUUID } from 'crypto';
import { reply } from '$/community';
import { ChildCommentProps, CommentProps } from '@/types/community/comment';
import User from '@/app/service/community/_components/User';
import Deleted from './Deleted';

function Comment({ ...props }: CommentProps) {
  const renderChildComment = (childrenComment?: ChildCommentProps[]) => {
    if (childrenComment) {
      return Object.values(childrenComment).map(value => {
        if (value.deleted) return <Deleted key={randomUUID()} isChild />;

        return (
          <div key={randomUUID()} className="flex bg-grey-100">
            <Image
              src={reply}
              alt="답글"
              width={32}
              height={32}
              className="border-b"
            />
            <Comment key={randomUUID()} {...value} />
          </div>
        );
      });
    }

    return null;
  };

  return (
    <div className="flex flex-col  w-full">
      {props.deleted ? (
        <Deleted />
      ) : (
        <div className="flex flex-col gap-2 p-4 border-b h-25">
          <User
            user_nickname={props.user_nickname}
            user_profile_image={props.user_profile_image}
            created_at={props.created_at}
            like_count={props.like_count}
            is_like={props.is_like}
            hasButton
          />
          {props.content}
        </div>
      )}
      {renderChildComment(props?.childComments)}
    </div>
  );
}

export default Comment;
