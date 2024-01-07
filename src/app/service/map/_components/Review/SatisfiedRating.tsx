'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import { RadioGroupRatingProps } from '@/types/map/ReviewProps';
import { useEffect } from 'react';
import IconContainer, {
  customIcons,
} from '@/app/service/map/_components/Review/IconContainer';

const SatisfiedRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

export default function RadioGroupRating({
  isOpen,
  handlePoint,
}: RadioGroupRatingProps) {
  useEffect(() => {
    const handleScroll = (event: Event) => {
      event.preventDefault();
    };

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
    };

    if (isOpen) {
      window.addEventListener('scroll', handleScroll, { passive: false });
      window.addEventListener('wheel', handleWheel, { passive: false });
    } else {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isOpen]);

  return (
    <div className="absolute z-20 h-8 left-1/4 bottom-1/4 top-0 rounded-xl translate-x-[-50%] translate-y-[-50%] bg-gray-200 py-1 px-2">
      <SatisfiedRating
        onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
          const target = e.target as typeof e.target & {
            value: number;
          };
          handlePoint(() => target.value);
        }}
        name="highlight-selected-only"
        defaultValue={3}
        IconContainerComponent={IconContainer}
        getLabelText={(value: number) => customIcons[value]?.label}
        highlightSelectedOnly
      />
    </div>
  );
}
