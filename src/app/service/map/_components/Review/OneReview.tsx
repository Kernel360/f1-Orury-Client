import { ReviewDataType } from '@/types/map/review';
import { Rating } from '@mui/material';
import getTimeDiff from '@/util/getTimeDiff';

function OneReview(props: ReviewDataType) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, create_at, img_urls, like_point, writer, update_at, content } =
    props;

  return (
    <div className="p-[1rem] shadow">
      <div className="flex justify-between">
        <span className="text-xl font-bold">{writer}</span>
        <Rating size="small" value={like_point} readOnly />
      </div>
      {content && <div>{content}</div>}
      <div className="flex justify-between pt-2">
        <div>반응 남기기</div>
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
