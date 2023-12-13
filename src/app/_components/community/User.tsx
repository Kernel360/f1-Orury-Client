import Image from 'next/image';
import getTimeDiff from '@/utils/getTimeDiff';
import POST from '@/constants/community/post';
import { UserProps } from '@/types/community/user';
import { thumbsUp, comment } from '$/community';

function User({
  user_profile_image,
  user_nickname,
  created_at,
  like_count,
  comment_count,
}: UserProps) {
  return (
    <div className="flex gap-2">
      <Image
        src={user_profile_image}
        alt="image"
        width={POST.imageSize}
        height={POST.imageSize}
        className="rounded-full"
      />
      <div className="flex flex-col">
        <span className="text-sm font-semibold">{user_nickname}</span>
        <div className="flex gap-[6px]">
          <span className="text-xs text-grey-500">
            {getTimeDiff(created_at)}
          </span>
          <div className="flex gap-1">
            {like_count && (
              <>
                <Image src={thumbsUp} alt="좋아요" width={16} />
                <span className="text-red text-xs">{like_count}</span>
              </>
            )}
            {comment_count && (
              <>
                <Image src={comment} alt="댓글" width={16} />
                <span className="text-primary text-xs">{comment_count}</span>
              </>
            )}
          </div>
        </div>
        <div />
      </div>
    </div>
  );
}

export default User;
