interface SWRResponseWithData<T> {
  data: T;
  message: string;
  status: number;
}

interface SWRInfinityWithData<T> {
  data: T
}

interface PositionType {
  latitude: number;
  longitude: number;
}

interface URLType {
  label: 'homepage' | 'instagram' | 'kakaomap';
  url: string;
}

interface SearchKeywordListType {
  data: OneSearchKeywordType[];
  keyword: string;
  total: number;
}

interface OneSearchKeywordType {
  doing_business: boolean;
  id: number;
  is_like: boolean;
  name: string;
  review_count: number;
  road_address: string;
  score_average: number;
  thumbnail_image: string | string[];
  position: PositionType;
}

interface PointChartDataType {
  point: number;
  count: number;
}

interface AvgChartDataType {
  month: number;
  avg: number;
  count: number;
}

interface AxisChartPointType {
  index: number;
  x: number;
  y: number;
  data: PointChartDataType[];
}

interface AxisChartAvgType {
  index: number;
  x: number;
  y: number;
  data: AvgChartDataType[];
}

interface SearchIdDetailMapType {
  data: DetailPlaceType;
  message: string;
  status: number;
}

interface BusinessHoursType {
  business_hours: [
    { MONDAY: string },
    { TUESDAY: string },
    { WEDNESDAY: string },
    { THURSDAY: string },
    { FRIDAY: string },
    { SATURDAY: string },
    { SUNDAY: string },
  ];
}

interface DetailPlaceType extends BusinessHoursType {
  id: number;
  name: string;
  road_address: string;
  address: string;
  score_average: number;
  review_count: number;
  images: string[];
  position: PositionType;
  brand: string;
  phone_number: string;
  kakao_map_link: string;
  instagram_link: string;
  homepage_link: string;
  setting_day: string;
  doing_business: boolean;
  isLike: boolean;
  bar_chart_data: PointChartDataType[];
  line_chart_data: AvgChartDataType[];
}

interface CenterType {
  lat: number;
  lng: number;
}

interface MapMoveControlType {
  center: CenterType;
  isPanto: boolean;
}

export type {
  SWRResponseWithData,
  PositionType,
  BusinessHoursType,
  OneSearchKeywordType,
  URLType,
  CenterType,
  SWRInfinityWithData,
  DetailPlaceType,
  PointChartDataType,
  AvgChartDataType,
  SearchIdDetailMapType,
  AxisChartPointType,
  AxisChartAvgType,
  SearchKeywordListType,
  MapMoveControlType,
};
