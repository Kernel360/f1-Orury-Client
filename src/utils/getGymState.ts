/**
 * FormData 생성을 위한 유틸리티 함수
 *
 * @param 날짜별 활동 시간을 담은 배열
 * @returns 현재 사용 가능한지의 여부 ex) -1 모름, 0 영업 중, 1 영업 종료
 */

import { BusinessHoursType } from '@/types/map/map';

const getGymState = ({ business_hours }: BusinessHoursType) => {
  const nowDate = new Date();
  const nowHours = nowDate.getHours();
  const Day = nowDate.getDay();
  const DayInfo = business_hours[Day];
  const info = Object.values(DayInfo)[0];

  if (info === null) return -1;

  const [startTime, endTime] = info.split('-');
  if (
    Number(startTime.split(':')[0]) < nowHours &&
    Number(endTime.split(':')[0]) > nowHours
  ) {
    return 0;
  }
  return 1;
};

export default getGymState;
