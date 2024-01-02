import { Avatar, Rating } from '@mui/material';
import getTimeDiff from '@/util/getTimeDiff';
import MapCarousel from '@/app/service/map/_components/MapCarousel';
import { Smile } from 'lucide-react';
import RadioGroupRating from '@/app/service/map/_components/Review/SatisfiedRating';
import { useState } from 'react';
import { OneReviewProps } from '@/types/map/ReviewProps';
import { customIcons } from '@/app/service/map/_components/Review/IconContainer';
import IconChipList from '@/app/service/map/_components/Review/IconChipList';
import clsx from 'clsx';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/app/_components/ui/dropdown-menu';

function OneReview({ item, handleImageOpen }: OneReviewProps) {
  const {
    isMine,
    create_at,
    img_urls,
    like_point,
    writer,
    update_at,
    content,
    review_reaction,
  } = item;

  const [isRatingModalOpen, setIsRatingModalOpen] = useState<boolean>(false);
  const [point, setPoint] = useState<number>(isMine?.point ?? 0);

  const TouchClassName = clsx(
    'flex duration-500 items-center gap-1 rounded-3xl p-2',
    { 'bg-white shadow': !isRatingModalOpen },
    { 'bg-gray-100': isRatingModalOpen },
  );

  return (
    <div className="p-[1rem] shadow">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Avatar className="w-8 h-8" src={writer.img} />
          <span className="text-m font-bold">{writer.name}</span>
          {isMine && (
            <DropdownMenu className="z-[105]">
              <DropdownMenuTrigger>Open</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
        <Rating size="small" value={like_point} readOnly />
      </div>
      {content && <div>{content}</div>}
      {img_urls && img_urls?.length !== 0 && (
        <div className="mt-4">
          <MapCarousel
            width="w-full"
            img_urls={img_urls}
            handleImageOpen={handleImageOpen}
          />
        </div>
      )}
      {isRatingModalOpen && (
        <button
          type="button"
          className="fixed z-10 top-0 left-0 w-full h-full cursor-auto"
          onClick={() => setIsRatingModalOpen(false)}
        />
      )}
      <IconChipList item={review_reaction} />
      <div className="relative flex pt-2 justify-between">
        <button
          type="button"
          onClick={() => setIsRatingModalOpen(true)}
          className={TouchClassName}
        >
          {point === 0 ? (
            <Smile size={24} strokeWidth="2" />
          ) : (
            customIcons[point]?.icon
          )}
          <span>반응 남기기</span>
        </button>
        {isRatingModalOpen && (
          <RadioGroupRating isOpen={isRatingModalOpen} handlePoint={setPoint} />
        )}
        <div>
          {create_at === update_at
            ? getTimeDiff(create_at)
            : `수정 됨 ${getTimeDiff(update_at)}`}
        </div>
      </div>
    </div>
  );
}

export default OneReview;
