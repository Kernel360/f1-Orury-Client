import Image from 'next/image';
import { reply } from '$/community';
import { CommentProps } from '@/types/community/comment';
import User from '@/app/service/community/_components/User';
import Deleted from '@/app/service/community/_components/comment/Deleted';
import Content from '@/app/service/community/_components/comment/Content';

function Comment({ ...props }: CommentProps) {
  return (
    <div className="flex">
      {props.parent_id ? (
        <Image
          src={reply}
          alt="답글"
          width={32}
          height={32}
          className={`border-b ${props.deleted ? 'bg-white' : 'bg-purple-50'}`}
        />
      ) : null}
      <div className="flex flex-col w-full">
        {props.deleted ? (
          <Deleted />
        ) : (
          <div
            className={`flex flex-col gap-2 p-4 border-b h-25 ${
              props.parent_id ? 'bg-purple-50' : ''
            }`}
          >
            <User
              user_nickname={props.user_nickname}
              user_profile_image={props.user_profile_image}
              created_at={props.created_at}
              like_count={props.like_count}
              is_like={props.is_like}
              id={props.id}
              hasButton
            />
            <Content id={props.id} content={props.content} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Comment;
