import { Star, StarHalf } from 'lucide-react';
import { v4 } from 'uuid';

function Ratingbar({ size, point }: { size: number; point: number }) {
  const CheckStarCount = Math.floor(point);
  const CheckHalfStar = (point * 10) % 10 >= 5;
  return (
    <div className="flex gap-[0.25]">
      {Array.from({ length: CheckStarCount }).map(() => (
        <Star
          width={size}
          height={size}
          key={v4()}
          strokeWidth={1}
          fill="#F1C644"
        />
      ))}
      {CheckHalfStar ? (
        <StarHalf size={size} fill="#F1C644" strokeWidth={1} />
      ) : null}
      {Array.from({ length: 5 - CheckStarCount - (CheckHalfStar ? 1 : 0) }).map(
        () => (
          <Star
            width={size}
            height={size}
            key={v4()}
            strokeWidth={1}
            fill="none"
          />
        ),
      )}
    </div>
  );
}

export default Ratingbar;
