import Image from 'next/image';
import { PostsProps } from '@/types/community/posts';
import Link from 'next/link';
import User from '@/app/service/community/_components/User';

function Post({ ...props }: PostsProps) {
  return (
    <li>
      <Link
        href={`/service/community/${props.id}`}
        className="flex justify-between gap-3 py-3"
      >
        <div className="flex flex-col gap-3 max-w-[calc(100%-112px)]">
          <User {...props} />
          <div className="flex flex-col">
            <span className="font-bold ellipsis">{props.title}</span>
            <span className="text-sm whitespace-normal ellipsis line-clamp-2">
              {props.content}
            </span>
          </div>
        </div>
        <Image
          src={props.thumbnail_image}
          alt="image"
          width={96}
          height={96}
          className="rounded-lg"
        />
      </Link>
    </li>
  );
}

export default Post;
