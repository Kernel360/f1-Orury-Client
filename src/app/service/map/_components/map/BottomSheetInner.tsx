import Image from 'next/image';
import clsx from 'clsx';
import OneSiteUrl from '@/app/service/map/_components/map/OneSiteUrl';
import BarRatingChart from '@/app/service/map/_components/map/BarRatingChart';
import getAvgPoint from '@/utils/getAvgPoint';
import LineRatingChart from '@/app/service/map/_components/map/LineRatingChart';
import { BottomSheetInnerProps } from '@/types/map/BottomSheetProps';
import { Smartphone } from 'lucide-react';
import { COLOR } from '@/styles/color';
import { aBeeZee } from '@/styles/fonts';
import MapCarousel from '@/app/service/map/_components/MapCarousel';

/**
 * @description 바텀시트의 내부 콘테이너로서 내용물을 보여주는데 초점을 두고 있습니다.
 * @param props 상세정보들을 가져와서 보여주기 위해 상세값들을 가져옵니다.
 * @param handleImageOpen 단일 image Modal을 열기 위해서 사용되는 값입니다.
 * @param handleReviewOpen 해당 리뷰의 정보를 불러오기 위한 모달을 열어주기 위해 사용되는 함수입니다.
 */
function BottomSheetInner({
  data,
  handleImageOpen,
  handleReviewOpen,
}: BottomSheetInnerProps) {
  const {
    id,
    state,
    title,
    logo_img,
    week_end,
    week_day,
    setting_day,
    site_urls,
    bar_chart_data,
    line_chart_data,
    images,
    phone,
  } = data;

  const stateClassName = clsx('text-[0.75rem] leading-[1.063rem]', {
    'text-green': state,
    'text-end-time': !state,
  });

  const onModalOpen = () => {
    handleReviewOpen(id);
  };

  return (
    <>
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
          <Smartphone stroke={COLOR.default} size={20} strokeWidth={1.25} />
          <a className="cursor-pointer" href={`tel:${phone}`}>
            {phone}
          </a>
        </div>
      </div>
      <div className="shadow-custom-line h-[1px] py-1" />
      <div className="flex justify-between p-[0.75rem]">
        <span>사진</span>
        <span>{`${images.length}개`}</span>
      </div>
      <MapCarousel handleImageOpen={handleImageOpen} images={images} />
      <div className="shadow-custom-line h-[1px] py-3" />
      <div className="flex justify-end p-[0.75rem]">
        <button type="button" onClick={onModalOpen}>
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
