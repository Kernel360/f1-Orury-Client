/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image';
import OneSiteUrl from '@/app/service/map/_components/bottom-sheet/OneSiteUrl';
import BarRatingChart from '@/app/service/map/_components/chart/BarRatingChart';
import LineRatingChart from '@/app/service/map/_components/chart/LineRatingChart';
import { BottomSheetInnerProps } from '@/types/map/BottomSheetProps';
import { Smartphone, Copy, ChevronDown } from 'lucide-react';
import { COLOR } from '@/styles/color';
import { aBeeZee } from '@/styles/fonts';
import MapCarousel from '@/app/_components/review/review-component/MapCarousel';
import useReviewStore from '@/store/review/reviewStore';
import { cn } from '@/lib/utils';
import getGymState from '@/utils/getGymState';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

/**
 * @description 바텀시트의 내부 콘테이너로서 내용물을 보여주는데 초점을 두고 있습니다.
 * @param data 상세정보들을 가져와서 보여주기 위해 상세값들을 가져옵니다.
 */
function BottomSheetInner({ data }: BottomSheetInnerProps) {
  const onReview = useReviewStore(state => state.onReview);
  const {
    address,
    business_hours,
    id,
    instagram_link,
    kakao_map_link,
    road_address,
    score_average,
    setting_day,
    bar_chart_data,
    line_chart_data,
    doing_business,
    images,
    name,
    phone_number,
    position,
  } = data;

  // 현재 요일 조회 (암장 영업일을 현재기준으로 상단에 렌더링하기때문)
  const week = ['일', '월', '화', '수', '목', '금', '토', '일'];
  const curDay = week[new Date().getDay()];

  const onModalOpen = () => {
    onReview(id);
  };

  // 주소 복사
  const copyAdd = () => {
    window.navigator.clipboard.writeText(road_address).then(() => {
      // 복사가 완료되면 호출된다.
      alert('복사완료');
    });
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

      <main className="p-[1rem] " style={{ border: '2px solid red' }}>
        <section className=" gap-[0.75rem]">
          <div className="flex">
            {doing_business ? '영업중' : '영업 종료'}
            <h2 className="text-gray-900 font-semibold text-base">운영시간</h2>
          </div>

          <ul>
            <div>{`[월] ${business_hours[0].MONDAY}`}</div>
            <details className="cursor-pointer">
              <summary className="list-none">
                <ChevronDown size={14} />
              </summary>
              <div>{`[화] ${business_hours[1].TUESDAY}`}</div>
              <div>{`[수] ${business_hours[2].WEDNESDAY}`}</div>
              <div>{`[목] ${business_hours[3].THURSDAY}`}</div>
              <div>{`[금] ${business_hours[4].FRIDAY}`}</div>
              <div>{`[토] ${business_hours[5].SATURDAY}`}</div>
              <div>{`[일] ${business_hours[6].SUNDAY}`}</div>
            </details>
          </ul>
          <ul>
            <details className="cursor-pointer">
              <summary className="list-none">
                <ChevronDown size={14} />
              </summary>
              {business_hours.map((hours, index) =>
                Object.entries(hours).map(([day, time]) => (
                  <div key={day}>{`[${day}] ${time}`}</div>
                )),
              )}
            </details>
          </ul>
          {setting_day && (
            <>
              <div className="text-[0.875rem]">[Setting Day]</div>
              <div className="text-[0.688rem]">{setting_day}</div>
            </>
          )}
        </section>
        <div className="shadow-custom-line h-[1px] py-1" />
        <section>
          <h2 className="text-gray-900 font-semibold text-base">센터 정보</h2>
        </section>
        <div className="shadow-custom-line h-[1px] py-1" />
        <section>
          <h2 className="text-gray-900 font-semibold text-base">위치</h2>
          <Map
            center={{ lat: position.latitude, lng: position.longitude }}
            style={{
              width: '90%',
              height: '120px',
              borderRadius: '8px',
              margin: 'auto',
            }}
          >
            <MapMarker
              position={{ lat: position.latitude, lng: position.longitude }}
            />
          </Map>
          <div>{road_address}</div>
          <button
            type="button"
            onClick={copyAdd}
            className="flex justify-center align-center w-[100px] h-[37px] px-6px pt-16px pb-12px gap-4px rounded-lg border border-solid border-[#E5E7EB]"
          >
            <Copy size={14} />
            주소복사
          </button>
        </section>
      </main>
    </>
  );
}

export default BottomSheetInner;
