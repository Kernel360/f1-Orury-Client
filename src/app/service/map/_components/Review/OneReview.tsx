import { OneReviewProps } from '@/types/map/review';
import { Avatar, Rating } from '@mui/material';
import getTimeDiff from '@/util/getTimeDiff';
import MapCarousel from '@/app/service/map/_components/MapCarousel';
import { MoreHorizontal, Smile } from 'lucide-react';
import { COLOR } from '@/styles/color';
import RadioGroupRating, {
  customIcons,
} from '@/app/service/map/_components/Review/SatisfiedRating';
import { useState } from 'react';

function OneReview({ item, handleImageOpen }: OneReviewProps) {
  const {
    isMine,
    create_at,
    img_urls,
    like_point,
    writer,
    update_at,
    content,
  } = item;

  const [isRatingModalOpen, setIsRatingModalOpen] = useState<boolean>(false);
  const [point, setPoint] = useState<number>(isMine?.point ?? 0);

  return (
    <div className="p-[1rem] shadow">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Avatar className="w-8 h-8" src={writer.img} />
          <span className="text-m font-bold">{writer.name}</span>
          {isMine && <MoreHorizontal strokeWidth="1" stroke={COLOR.gray} />}
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
      <div className="relative flex pt-2 justify-between">
        <button
          type="button"
          onClick={() => setIsRatingModalOpen(true)}
          className="flex items-center gap-1"
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
