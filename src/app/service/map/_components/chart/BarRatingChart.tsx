import type { AxisChartPointType, PointChartDataType } from '@/types/map/map';
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import { COLOR } from '@/styles/color';

function CustomYAxisLeft(props: Partial<AxisChartPointType>) {
  const idx = props?.index!;
  const name = `${props?.data![idx].point} 점`;
  return (
    <text
      dy="0.355em"
      x={props?.x}
      y={props?.y}
      fontSize="12"
      fill={COLOR.black}
      fontWeight="bold"
      textAnchor="end"
    >
      {name}
    </text>
  );
}

function CustomYAxisRight(props: Partial<AxisChartPointType>) {
  const idx = props?.index!;
  const count = props?.data![idx].count;
  return (
    <text
      dy="0.355em"
      x={props?.x}
      y={props?.y}
      fontSize="12"
      fill={COLOR.gray}
      fontWeight="bold"
    >
      {count}
    </text>
  );
}

function BarRatingChart({ data }: { data: PointChartDataType[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        margin={{
          top: 0,
          right: -15,
          bottom: 0,
          left: -15,
        }}
        layout="vertical"
        data={data}
        barGap={5}
      >
        <YAxis
          dataKey="point"
          type="category"
          tickLine={false}
          axisLine={false}
          tick={<CustomYAxisLeft data={data} />}
        />
        <YAxis
          dataKey="count"
          type="category"
          yAxisId="right"
          orientation="right"
          tickLine={false}
          axisLine={false}
          tick={<CustomYAxisRight data={data} />}
        />
        <XAxis dataKey="count" type="number" hide />
        <Bar
          dataKey="count"
          barSize={6}
          background={{ fill: '#f3f3f3' }}
          radius={[10, 10, 10, 10]}
        >
          {data?.map(entry => {
            return <Cell key={`cell-${entry.point}`} fill="red" />;
          })}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarRatingChart;
