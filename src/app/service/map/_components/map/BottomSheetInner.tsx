import Image from 'next/image';
import clsx from 'clsx';
import { aBeeZee } from '@/styles/font';
import OneSiteUrl from '@/app/service/map/_components/map/OneSiteUrl';
import BarRatingChart from '@/app/service/map/_components/map/BarRatingChart';
import getAvgPoint from '@/util/getAvgPoint';
import LineRatingChart from '@/app/service/map/_components/map/LineRatingChart';
import { v4 as uuid } from 'uuid';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/app/_components/ui/carousel';
import { useState } from 'react';
import { BottomSheetInnerProps } from '@/types/map/BottomSheetProps';
import ReviewModal from '@/app/service/map/_components/Review/ReviewModal';
import { Smartphone } from 'lucide-react';
import { defaultColor } from '@/constants/design';

/**
 * @description 바텀시트의 내부 콘테이너로서 내용물을 보여주는데 초점을 두고 있습니다.
 * @param props 상세정보들을 가져와서 보여주기 위해 상세값들을 가져옵니다.
 * @param handleImageOpen 단일 image Modal을 열기 위해서 사용되는 값입니다.
 */
function BottomSheetInner({ data, handleImageOpen }: BottomSheetInnerProps) {
  const {
    state,
    title,
    logo_img,
    week_end,
    week_day,
    setting_day,
    site_urls,
    bar_chart_data,
    line_chart_data,
    img_urls,
    phone,
  } = data;

  const [isReviewModalOpen, setIsReviewModalOpen] = useState<boolean>(false);

  const stateClassName = clsx('text-[0.75rem] leading-[1.063rem]', {
    'text-green': state,
    'text-end-time': !state,
  });

  const onReviewModalOpen = () => {
    setIsReviewModalOpen(true);
  };

  const onReviewModalClose = () => {
    setIsReviewModalOpen(false);
  };

  return (
    <>
      {isReviewModalOpen ? (
        <ReviewModal
          isOpen={isReviewModalOpen}
          onCloseModal={onReviewModalClose}
        />
      ) : null}
      <div className="p-[0.75rem]">
        <div className="flex gap-[0.75rem]">
          <div>
            <Image
              src={logo_img}
              alt={`${title} 로고이미지`}
              width="110"
              height="110"
            />
          </div>
          <div className={aBeeZee.className}>
            <div className={stateClassName}>
              {state ? '영업중' : '영업 종료'}
            </div>
            <div className="text-[0.875rem]">운영시간</div>
            <div className="text-[0.688rem]">{week_day}</div>
            <div className="text-[0.688rem]">{week_end}</div>
            <div className="text-[0.875rem]">세팅요일</div>
            <div className="text-[0.688rem]">{setting_day}</div>
          </div>
        </div>
      </div>
      <div className="shadow-custom-line h-[1px] py-1" />
      <div className="p-[0.75rem] text-m text-purple-500">
        {site_urls.map(v => (
          <OneSiteUrl key={v.url} item={v} />
        ))}
        <div className="flex gap-2">
          <Smartphone stroke={defaultColor} size={20} strokeWidth={1.25} />
          <a className="cursor-pointer" href={`tel:${phone}`}>
            {phone}
          </a>
        </div>
      </div>
      <div className="shadow-custom-line h-[1px] py-1" />
      <div className="flex justify-between p-[0.75rem]">
        <span>사진</span>
        <span>{`${img_urls.length}개`}</span>
      </div>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-[95%] mx-auto my-0"
      >
        <CarouselContent className="h-[6.5rem]">
          {img_urls.map(url => (
            <CarouselItem key={uuid()} className="relative basis-1/3">
              <div className="p-[0.5rem] h-full relative">
                <Image
                  onClick={() => handleImageOpen(url)}
                  src={url}
                  alt={url}
                  fill
                  objectPosition="center"
                  objectFit="cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="shadow-custom-line h-[1px] py-3" />
      <div className="flex justify-end p-[0.75rem]">
        <button type="button" onClick={onReviewModalOpen}>
          리뷰 더보기
        </button>
      </div>
      <div className="flex p-[0.75rem] h-[11rem]">
        <div className="w-[8rem] flex flex-col items-center justify-center justify-items-center">
          <span className="text-[1.5rem]">평균</span>
          <span className="text-[3rem]">{getAvgPoint(bar_chart_data)}</span>
        </div>
        <BarRatingChart data={bar_chart_data} />
      </div>
      <div className="shadow-custom-line h-[1px] py-1" />
      <div className="flex p-[0.75rem] h-[11rem]">
        <LineRatingChart data={line_chart_data} />
      </div>
      <div className="shadow-border h-[1px]" />
    </>
  );
}

export default BottomSheetInner;
