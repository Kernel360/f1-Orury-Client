import { BottomSheetInnerProps } from '@/types/map/BottomSheetProps';
import { ChevronDown, Copy } from 'lucide-react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

export default function BottomSheetInfoTab({ data }: BottomSheetInnerProps) {
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

  // business_hours에 현재 요일과 일치한것 filter 후 return
  const filteredBusinessHours = business_hours.filter(business_hour => {
    return Object.keys(business_hour).includes(curDay);
  });
  // 주소 복사
  const copyAdd = () => {
    window.navigator.clipboard.writeText(road_address).then(() => {
      // 복사가 완료되면 호출된다.
      toast('복사완료');
    });
  };

  return (
    <div>
      <main className="h-fit" style={{ border: '2px solid red' }}>
        <section className=" gap-[0.75rem] my-5">
          <div className="flex">
            <span className="rounded px-1 gap-8px bg-[#B79DFF] text-[#ffff] mr-1">
              {doing_business ? '영업중' : '영업 종료'}
            </span>
            <div className="text-gray-900 font-semibold text-base">
              운영 시간
            </div>
          </div>

          <div className="my-2">
            <div>{`[${Object.keys(filteredBusinessHours[0])}] ${Object.values(filteredBusinessHours[0])}`}</div>
            <ul>
              <details className="cursor-pointer">
                <summary className="list-none">
                  <ChevronDown size={14} />
                </summary>
                {business_hours.map(business_hour =>
                  Object.entries(business_hour).map(([day, time]) => (
                    <div key={day}>{`[${day}] ${time}`}</div>
                  )),
                )}
                {setting_day && (
                  <div className="text-[0.875rem]">
                    {`[Setting Day] ${setting_day}`}
                  </div>
                )}
              </details>
            </ul>
          </div>
        </section>
        <div className="shadow-custom-line h-[1px] py-1" />
        <section className="my-5">
          <div className="text-gray-900 font-semibold text-base">센터 정보</div>
        </section>
        <div className="shadow-custom-line h-[1px] py-1" />
        <section className="my-5">
          <div className="text-gray-900 font-semibold text-base">위치</div>
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
    </div>
  );
}
