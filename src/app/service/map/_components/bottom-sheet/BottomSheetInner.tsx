import Image from 'next/image';
import OneSiteUrl from '@/app/service/map/_components/bottom-sheet/OneSiteUrl';
import BarRatingChart from '@/app/service/map/_components/chart/BarRatingChart';
import getAvgPoint from '@/utils/getAvgPoint';
import LineRatingChart from '@/app/service/map/_components/chart/LineRatingChart';
import { BottomSheetInnerProps } from '@/types/map/BottomSheetProps';
import { Smartphone } from 'lucide-react';
import { COLOR } from '@/styles/color';
import { aBeeZee } from '@/styles/fonts';
import MapCarousel from '@/app/service/map/_components/review-component/MapCarousel';
import useReviewStore from '@/store/review/reviewStore';
import { cn } from '@/lib/utils';
import BottomSheetInnerSkeleton from '../skeleton/BottomSheetInnerSkeleton';
import getGymState from '@/utils/getGymState';

/**
 * @description 바텀시트의 내부 콘테이너로서 내용물을 보여주는데 초점을 두고 있습니다.
 * @param data 상세정보들을 가져와서 보여주기 위해 상세값들을 가져옵니다.
 */
function BottomSheetInner({ data }: BottomSheetInnerProps) {
  if (!data) return <BottomSheetInnerSkeleton />;
  const {
    address,
    brand,
    business_hours,
    doing_business,
    homepage_link,
    id,
    instagram_link,
    isLike,
    kakao_map_link,
    position,
    review_count,
    road_address,
    score_average,
    setting_day,
    bar_chart_data,
    line_chart_data,
    images,
    name,
    phone_number,
  } = data;

  const onReview = useReviewStore(state => state.onReview);

  // const reviewInfinity = useOruryReview.getReviews(id);

  const state = getGymState({ business_hours: business_hours });

  const stateClassName = cn('text-[0.75rem] leading-[1.063rem]', {
    'text-green': state === 0,
    'text-end-time': state === 1,
  });

  // const onModalOpen = () => {
  //   onReview(reviewInfinity);
  // };

  console.log(Object.values(business_hours[0])[0]);

  return (
    <>
      <div className="p-[0.75rem]">
        <div className="flex gap-[0.75rem]">
          <div>
            <Image
              src={images[0]}
              alt={`${name} 로고이미지`}
              width="110"
              height="110"
            />
          </div>
          <div className={aBeeZee.className}>
            {state !== -1 && (
              <div className={stateClassName}>
                {state === 0 ? '영업중' : '영업 종료'}
              </div>
            )}
            <>
              {Object.values(business_hours[new Date().getDay() - 1])[0] && (
                <div className="text-[0.875rem]">운영시간</div>
              )}
              {
                <div className="text-[0.688rem]">
                  {Object.values(business_hours[new Date().getDay() - 1])[0]}
                </div>
              }
            </>
            {setting_day && (
              <>
                <div className="text-[0.875rem]">세팅요일</div>
                <div className="text-[0.688rem]">{setting_day}</div>
              </>
            )}
            <div className="text-[0.688rem]">지번 주소: {address}</div>
            <div className="text-[0.688rem]">도로명 주소: {road_address}</div>
          </div>
        </div>
      </div>
      <div className="shadow-custom-line h-[1px] py-1" />
      <div className="p-[0.75rem] text-m text-purple-500">
        <OneSiteUrl label="homepage" url={homepage_link} />
        <OneSiteUrl label="instagram" url={instagram_link} />
        <OneSiteUrl label="kakaomap" url={kakao_map_link} />
        <div className="flex gap-2">
          <Smartphone stroke={COLOR.primary} size={20} strokeWidth={1.25} />
          <a className="cursor-pointer" href={`tel:${phone_number}`}>
            {phone_number}
          </a>
        </div>
      </div>
      <div className="shadow-custom-line h-[1px] py-1" />
      <div className="flex justify-between p-[0.75rem]">
        <span>사진</span>
        <span>{`${images.length}개`}</span>
      </div>
      <MapCarousel images={images} />
      <div className="shadow-custom-line h-[1px] py-3" />
      <div className="flex justify-end p-[0.75rem]">
        <button
          type="button"
          onClick={() => console.log('리뷰 더보기 창을 엽니다.')}
        >
          리뷰 더보기
        </button>
      </div>
      {bar_chart_data.length > 0 && (
        <div className="flex p-[0.75rem] h-[11rem]">
          <div className="w-[8rem] flex flex-col items-center justify-center justify-items-center">
            <span className="text-[1.5rem]">평균</span>
            <span className="text-[3rem]">{score_average}</span>
          </div>
          <BarRatingChart data={bar_chart_data} />
        </div>
      )}
      {line_chart_data.length > 0 && (
        <>
          <div className="shadow-custom-line h-[1px] py-1" />
          <div className="flex p-[0.75rem] h-[11rem]">
            <LineRatingChart data={line_chart_data} />
          </div>
        </>
      )}
      <div className="shadow-border h-[1px]" />
    </>
  );
}

export default BottomSheetInner;
