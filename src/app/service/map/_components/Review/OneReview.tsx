import { Avatar, Rating } from '@mui/material';
import getTimeDiff from '@/util/getTimeDiff';
import MapCarousel from '@/app/service/map/_components/MapCarousel';
import RadioGroupRating from '@/app/service/map/_components/Review/SatisfiedRating';
import { useState } from 'react';
import type { OneReviewProps } from '@/types/map/ReviewProps';
import { customIcons } from '@/app/service/map/_components/Review/IconContainer';
import IconChipList, {
  IconChip,
} from '@/app/service/map/_components/Review/IconChipList';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/app/_components/ui/dropdown-menu';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import * as React from 'react';
import { COLOR } from '@/styles/color';
import { MoreHorizontal } from 'lucide-react';
import useReviewStore from '@/store/review/reviewStore';
import { cn } from '@/lib/utils';

function OneReview({ item, handleImageOpen }: OneReviewProps) {
  const {
    id,
    isMine,
    create_at,
    images,
    score,
    writer,
    update_at,
    content,
    review_reaction,
    my_reaction,
  } = item;

  const [isRatingModalOpen, setIsRatingModalOpen] = useState<boolean>(false);
  const [reviewReaction, setReviewReaction] = useState({
    review_reaction: review_reaction.map(value => {
      return {
        type: value.type,
        count: value.type === my_reaction ? value.count - 1 : value.count,
      };
    }),
    my_reaction,
  });

  const TouchClassName = cn(
    'flex duration-500 shadow items-center gap-1 bg-white rounded-3xl p-2',
    { 'bg-gray-100': isRatingModalOpen },
    {
      'font-bold text-primary shadow-primary bg-gray-100':
        !!reviewReaction.my_reaction,
    },
  );

  const setFixMode = useReviewStore(state => state.setFixMode);

  const onFixHandling = () => {
    setFixMode(id);
  };

  const handlePoint = (
    type: 'help' | 'interest' | 'like' | 'thumb' | 'angry',
  ) => {
    if (type === undefined) return;
    if (reviewReaction.my_reaction === type) {
      setReviewReaction(prev => {
        return {
          ...prev,
          my_reaction: null,
        };
      });
    } else {
      setReviewReaction(prev => {
        return {
          ...prev,
          my_reaction: type,
        };
      });
    }
  };

  return (
    <div className="p-[1rem] shadow">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Avatar className="w-8 h-8" src={writer.img} />
          <span className="text-m font-bold">{writer.name}</span>
          {isMine?.status && (
            <DropdownMenu>
              <DropdownMenuTrigger className="relative z-10">
                <MoreHorizontal size={20} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="absolute min-w-[5rem] z-[103] flex cursor-default select-none flex-col items-center justify-center rounded-sm py-1.5 pl-2 pr-2 text-sm outline-none translate-y-[-50%] bg-white shadow">
                <DropdownMenuItem onClick={onFixHandling}>
                  수정
                </DropdownMenuItem>
                <DropdownMenuItem className="text-warning">
                  삭제
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
        <Rating size="small" value={score} readOnly />
      </div>
      {content && <div>{content}</div>}
      {images && images?.length !== 0 && (
        <div className="mt-4">
          <MapCarousel
            width="w-full"
            images={images}
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
      <IconChipList
        myReaction={reviewReaction.my_reaction}
        item={reviewReaction.review_reaction}
      />
      <div className="relative flex pt-2 justify-between">
        <button
          type="button"
          onClick={() => setIsRatingModalOpen(true)}
          className={TouchClassName}
        >
          {reviewReaction.my_reaction === null ? (
            <SentimentSatisfiedAltIcon sx={{ color: COLOR.default }} />
          ) : (
            customIcons[IconChip[reviewReaction.my_reaction]]?.icon
          )}
          <span>반응 남기기</span>
        </button>
        {isRatingModalOpen && (
          <RadioGroupRating
            isOpen={isRatingModalOpen}
            handlePoint={handlePoint}
          />
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
