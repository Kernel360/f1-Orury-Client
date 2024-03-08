'use client';

import Image from 'next/image';
import Link from 'next/link';
import User from '@/app/service/community/_components/User';

import type { OnePostProps } from '@/types/community/post';

function OnePost({ ...props }: OnePostProps) {
  const { id, title, content, thumbnail_image, user_id, post_id } = props;

  return (
    <li>
      <Link
        href={`/service/community/${post_id || id || user_id}`}
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

        {thumbnail_image && (
          <Image
            src={thumbnail_image}
            alt="image"
            width={96}
            height={96}
            className="rounded-lg"
          />
        )}
      </Link>
    </li>
  );
}

export default OnePost;
