'use client';

import useReviewStore from '@/store/review/reviewStore';
import Heading from '@/app/service/user/_components/Heading';

import { v4 } from 'uuid';
import { COLOR } from '@/styles/color';
import { ActivityProps } from '@/types/user';
import { ACTIVITY_TITLE, ACTIVITY_LIST } from '@/constants/my-page/activity';
import {
  BookCheck,
  ChevronRight,
  GanttChartSquare,
  MessageSquareText,
} from 'lucide-react';

function Activity({ setState }: ActivityProps) {
  const { purple300, black, primary, purple100 } = COLOR;
  const { onMyPage } = useReviewStore(state => state);

  const handleClick = (key: string) => {
    if (key === 'review') onMyPage();

    setState(key);
  };

  return (
    <section className="mt-4 bg-white shadow-xl">
      <Heading content={ACTIVITY_TITLE} />

      <div className="flex flex-col pb-4 pt-2 mx-4">
        {Object.entries(ACTIVITY_LIST).map(([key, value]) => (
          <button
            type="button"
            key={v4()}
            className="flex justify-between py-4 z-[1]"
            onClick={() => handleClick(key)}
          >
            <div className="flex gap-2">
              {key === 'post' && (
                <BookCheck fill={purple100} stroke={black} strokeWidth={1.25} />
              )}
              {key === 'comment' && (
                <MessageSquareText
                  fill={purple300}
                  stroke={black}
                  strokeWidth={1.25}
                />
              )}
              {key === 'review' && (
                <GanttChartSquare
                  fill={primary}
                  stroke={black}
                  strokeWidth={1.25}
                />
              )}
              {value}
            </div>
            <ChevronRight color="#96A2AC" strokeWidth={1.5} />
          </button>
        ))}
      </div>
    </section>
  );
}
export default Activity;
