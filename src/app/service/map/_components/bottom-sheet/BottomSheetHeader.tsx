/* eslint-disable import/order */
import Image from 'next/image';
import useCss from '@/hooks/common/useCss';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import OneSiteUrl from './OneSiteUrl';
import { Phone, Star, StarHalf, ChevronRight } from 'lucide-react';
import SquarePen from 'public/square-pen.svg';

interface BottomSheetHeaderProps {
  name: string;
  address: string;
  instagram_link?: string;
  is_like?: boolean;
  gym_type?: string;
  phone_number: string;
}

function BottomSheetHeader({
  name,
  address,
  instagram_link,
  is_like,
  gym_type,
  phone_number,
}: BottomSheetHeaderProps) {
  useCss('https://unpkg.com/react-spring-bottom-sheet/dist/style.css');

  const onClickBookmark = () => {
    console.log('====북마크 클릭');
  };

  const addressSplit = address.split(' ');

  return (
    <>
      <div>
        <div className="flex justify-end">
          {instagram_link && (
            <OneSiteUrl label="instagram" url={instagram_link} />
          )}
          <button type="button" className="ml-2" onClick={onClickBookmark}>
            {is_like ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </button>
        </div>

        <h1 className="flex items-left text-xl justify-left font-bold text-gray-800">
          {name}
        </h1>
      </div>
      <div className="text-gray-500 font-normal text-sm leading-5 text-left ">
        {gym_type && (
          <div>
            <span>{gym_type}</span>
            <span> · </span>
          </div>
        )}
        {addressSplit[0] + addressSplit[1]}
      </div>

      <div className="flex text-sm leading-5 font-semibold text-black">
        <div className="relative">
          <div className="flex gap-4px">
            {Array.from({ length: 5 }, () => (
              <Star fill="gray" strokeWidth={0} />
            ))}
          </div>
          <div className="flex gap-4px absolute top-0">
            <Star fill="#FFCB29" strokeWidth={0} />
            <Star fill="#FFCB29" strokeWidth={0} />
            <StarHalf fill="#FFCB29" strokeWidth={0} />
          </div>
        </div>
        별점 점수
        <ChevronRight size={24} strokeWidth={1} />
      </div>
      <div
        className="flex justify-around mt-10"
        style={{ display: 'flex', height: '36px', border: '1px solid red' }}
      >
        <a
          className="flex justify-center align-center w-[155px] h-[36px] px-6px pt-16px pb-12px gap-4px rounded-lg border border-solid border-[#E5E7EB]"
          href={phone_number}
        >
          <Phone size={24} strokeWidth={1} fill="black" />
          전화
        </a>
        <div className="flex justify-center align-center w-[155px] h-[36px] px-6px pt-16px pb-12px gap-4px rounded-lg border border-solid border-[#E5E7EB]">
          <Image src={SquarePen} width="24" height="24" alt="글쓰기" />
          글쓰기
        </div>
      </div>
    </>
  );
}

export default BottomSheetHeader;
