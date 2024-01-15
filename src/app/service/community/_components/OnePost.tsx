import Image from 'next/image';
import { PostsProps } from '@/types/community/post';
import Link from 'next/link';
import User from '@/app/service/community/_components/User';

function OnePost({ ...props }: PostsProps) {
  const { id, title, content } = props;

  return (
    <li>
      <Link
        href={`/service/community/${id}`}
        className="flex justify-between gap-3 py-3"
      >
        <div className="flex flex-col gap-3 max-w-[calc(100%-112px)]">
          <User post_id={id} {...props} />
          <div className="flex flex-col">
            <span className="font-bold ellipsis">{title}</span>
            <span className="text-sm whitespace-normal ellipsis line-clamp-2">
              {content}
            </span>
          </div>
        </div>

        <Image
          src="http://via.placeholder.com/360x360"
          alt="image"
          width={96}
          height={96}
          className="rounded-lg"
        />
      </Link>
    </li>
  );
}

export default OnePost;
