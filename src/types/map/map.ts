interface PositionType {
  lat: number;
  lng: number;
}

interface URLType {
  label: 'homepage' | 'instagram' | 'facebook' | 'kakaomap';
  url: string;
}

interface SearchKeywordListType {
  item: OneSearchKeywordType[];
  keyword: string;
  total: number;
}

interface OneSearchKeywordType {
  id: number;
  is_like: boolean;
  images: string[];
  title: string;
  name: string;
  road_address: string;
  review_count: number;
  score_average: number;
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

interface DetailPlaceType {
  id: number;
  title: string;
  site_urls: URLType[];
  place_title: string;
  logo_img: string;
  images: string[];
  phone: string;
  week_day: string;
  week_end: string;
  setting_day: string;
  state: boolean;
  position: PositionType;
  bar_chart_data: PointChartDataType[];
  line_chart_data: AvgChartDataType[];
}

interface MapMoveControlType {
  center: PositionType;
  isPanto: boolean;
}

export type {
  PositionType,
  OneSearchKeywordType,
  URLType,
  DetailPlaceType,
  PointChartDataType,
  AvgChartDataType,
  AxisChartPointType,
  AxisChartAvgType,
  SearchKeywordListType,
  MapMoveControlType,
};
