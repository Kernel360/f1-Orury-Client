import type { AxisChartAvgType, AvgChartDataType } from '@/types/map/map';
import {
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import { COLOR } from '@/styles/color';

function CustomXTick({ index, x, y, data }: Partial<AxisChartAvgType>) {
  const month = data![index!]?.month;
  return (
    <text
      dy="0.355em"
      x={x! + 10}
      y={y!}
      fontSize="12"
      fill={COLOR.black}
      fontWeight="bold"
      textAnchor="end"
    >
      {`${month}월`}
    </text>
  );
}

function LineRatingChart({ data }: { data: AvgChartDataType[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        margin={{
          top: 30,
          right: 30,
          bottom: 10,
          left: 30,
        }}
        data={data}
      >
        <CartesianGrid strokeDasharray="6 2" vertical={false} />
        <YAxis interval={0} domain={[0, 5]} ticks={[0, 1, 2, 3, 4, 5]} hide />
        <XAxis
          tick={<CustomXTick data={data} />}
          tickLine={false}
          axisLine={false}
          dataKey="month"
          type="category"
        />
        <Line type="monotone" dataKey="avg" stroke="#999999">
          <LabelList dataKey="avg" position="top" />
        </Line>
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineRatingChart;
