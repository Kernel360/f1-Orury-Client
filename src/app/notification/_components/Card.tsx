import Link from 'next/link';
import Image from 'next/image';

import { Megaphone } from 'lucide-react';
import type { NotificationProps } from '@/types/notification';
import { COLOR } from '@/styles/color';

// is_read 읽음 여부에 따른 디자인 변화 필요
function Card({ ...props }: NotificationProps) {
  const { url, title, content, created_at, image } = props;

  return (
    <Link
      href={url}
      className="bg-white rounded-[10px] border border-grey-200 my-2 mx-4 flex px-[10px] py-[14px] gap-3"
    >
      {image ? (
        <Image
          src={image}
          alt="이미지"
          width={36}
          height={36}
          className="rounded-lg h-9"
        />
      ) : (
        <div className="flex justify-center items-center rounded-lg h-9 w-9 bg-primary">
          <Megaphone size={20} color={COLOR.white} />
        </div>
      )}

      <div className="relative flex flex-col text-sm text-grey-800 w-full">
        <span className=" font-bold leading-4">{title}</span>
        <span className="leading-[22px] line-clamp-2">{content}</span>
        <span className="text-xs text-grey-700 pt-1">{created_at}</span>
      </div>
    </Link>
  );
}

export default Card;
