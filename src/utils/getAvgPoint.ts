import type { PointChartDataType } from '@/types/map/map';

// 전달받은 차트 데이터의 평균 값을 구하는 함수
function getAvgPoint(data: PointChartDataType[]) {
  if (data.length === 0) return 0;

  let totalCount = 0;
  return (
    Math.floor(
      (data
        .map(v => {
          totalCount += v.count;
          return v.point * v.count;
        })
        .reduce((prev, next) => prev + next, 0) /
        totalCount) *
        10,
    ) / 10
  );
}
export default getAvgPoint;
