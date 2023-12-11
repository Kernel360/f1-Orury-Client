import Image from 'next/image';
import ArticleProps from '@/types/community/article';
import getTimeDiff from '@/utils/getTimeDiff';

function Post({ ...props }: ArticleProps) {
  return (
    <li className="flex justify-between gap-3 py-3">
      <div className="flex flex-col gap-3 max-w-[calc(100%-112px)]">
        <div className="flex gap-2">
          <Image
            src={props.profileImage}
            alt="image"
            width={36}
            height={36}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-sm font-bold">{props.nickname}</span>
            <span className="text-xs text-grey-500">
              {getTimeDiff(props?.createdAt)}
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="font-bold ellipsis">{props.title}</span>
          <span className="text-sm whitespace-normal ellipsis line-clamp-2">
            {props.body}
          </span>
        </div>
      </div>
      <Image
        src={props.profileImage}
        alt="image"
        width={96}
        height={96}
        className="rounded-lg"
      />
    </li>
  );
}

export default Post;
