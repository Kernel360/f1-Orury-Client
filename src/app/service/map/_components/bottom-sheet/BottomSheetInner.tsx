/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image';
import OneSiteUrl from '@/app/service/map/_components/bottom-sheet/OneSiteUrl';
import BarRatingChart from '@/app/service/map/_components/chart/BarRatingChart';
import LineRatingChart from '@/app/service/map/_components/chart/LineRatingChart';
import { BottomSheetInnerProps } from '@/types/map/BottomSheetProps';
import { Smartphone } from 'lucide-react';
import { COLOR } from '@/styles/color';
import { aBeeZee } from '@/styles/fonts';
import MapCarousel from '@/app/_components/review/review-component/MapCarousel';
import useReviewStore from '@/store/review/reviewStore';
import { cn } from '@/lib/utils';
import getGymState from '@/utils/getGymState';

/**
 * @description 바텀시트의 내부 콘테이너로서 내용물을 보여주는데 초점을 두고 있습니다.
 * @param data 상세정보들을 가져와서 보여주기 위해 상세값들을 가져옵니다.
 */
function BottomSheetInner({ data }: BottomSheetInnerProps) {
  const onReview = useReviewStore(state => state.onReview);
  const {
    address,
    business_hours,
    homepage_link,
    id,
    instagram_link,
    kakao_map_link,
    road_address,
    score_average,
    setting_day,
    bar_chart_data,
    line_chart_data,
    images,
    name,
    phone_number,
  } = data;

  const state = getGymState({ business_hours });

  const onModalOpen = () => {
    onReview(id);
  };

  return (
    <>
      <Image
        src={images[0]}
        alt={`${name} 로고이미지`}
        width={0}
        height={0}
        sizes="100vw"
        className="w-screen h-64"
      />
      <div className="flex justify-end p-[0.75rem]">
        <button type="button" onClick={onModalOpen}>
          리뷰탭 만들어야하지롱 컴포넌트 분리해야하밍
        </button>
      </div>
      <div className="p-[0.75rem]">
        <div className="flex gap-[0.75rem]">
          <div className={aBeeZee.className}>
            {Object.values(
              business_hours[
                new Date().getDay() - 1 === -1 ? 6 : new Date().getDay() - 1
              ],
            )[0] && <div className="text-[0.875rem]">운영시간</div>}
            <div className="text-[0.688rem]">
              {`${
                Object.values(
                  business_hours[
                    new Date().getDay() - 1 === -1 ? 6 : new Date().getDay() - 1
                  ],
                )[0]
              }`}
            </div>

            {setting_day && (
              <>
                <div className="text-[0.875rem]">[Setting Day]</div>
                <div className="text-[0.688rem]">{setting_day}</div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="shadow-custom-line h-[1px] py-1" />
      <div className="p-[0.75rem] text-m text-purple-500">
        센터 정보
        {phone_number ? (
          <div className="flex gap-2">
            <Smartphone stroke={COLOR.primary} size={20} strokeWidth={1.25} />
            <a className="cursor-pointer" href={`tel:${phone_number}`}>
              {phone_number}
            </a>
          </div>
        ) : null}
      </div>
      <div className="shadow-custom-line h-[1px] py-1" />
      위치 카카오맵 지도 두둥
      <div>{road_address}</div>
      <div className="shadow-custom-line h-[1px] py-1" />
      <MapCarousel images={images} />
      <div className="shadow-custom-line h-[1px] py-3" />
      <div className="shadow-border h-[1px]" />
    </>
  );
}

export default BottomSheetInner;
