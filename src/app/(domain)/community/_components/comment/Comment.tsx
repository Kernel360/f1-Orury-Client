import Image from 'next/image';
import { randomUUID } from 'crypto';
import { reply } from '$/community';
import { ChildrenCommentProps, CommentProps } from '@/types/community/comment';
import User from '@/app/(domain)/community/_components/User';

function Comment({ ...props }: CommentProps) {
  const renderChildren = (childrenComment?: ChildrenCommentProps[]) => {
    if (childrenComment) {
      return Object.values(childrenComment).map(value => (
        <div key={randomUUID()} className="flex gap-2 pl-2">
          <Image src={reply} alt="답글" />
          <Comment key={randomUUID()} {...value} />
        </div>
      ));
    }
    return null;
  };

  return (
    <div className="flex flex-col gap-1 pt-4 pb-2 bg-white w-full">
      <div className="flex flex-col gap-2 px-4">
        <User
          user_nickname={props.user_nickname}
          user_profile_image={props.user_profile_image}
          created_at={props.created_at}
          like_count={props.like_count}
          isLike={props.is_like}
          hasButton
        />
        {props.content}
      </div>
      {renderChildren(props?.children)}
    </div>
  );
}

export default Comment;
