import type { AlertCardProps } from '@/types/alert';
import Image from 'next/image';

// 공지일 경우 default notice image로 대체 필요
function Card({ ...props }: AlertCardProps) {
  const { image, title, content, created_at } = props;

  return (
    <div className="bg-white rounded-[10px] border border-grey-200 my-2 mx-4 flex px-[10px] py-[14px] gap-3">
      <Image
        src={image}
        alt="이미지"
        width={36}
        height={36}
        className="rounded-lg h-9"
      />
      <div className="relative flex flex-col text-sm text-grey-800 w-full">
        <span className=" font-bold leading-4">{title}</span>
        <span className="leading-[22px] line-clamp-2">{content}</span>
        <span className="text-xs text-grey-700 pt-1">{created_at}</span>
      </div>
    </div>
  );
}

export default Card;
