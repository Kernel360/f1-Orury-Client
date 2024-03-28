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
import { Tab, Tabs, Box, Typography } from '@mui/material';
import { useState } from 'react';
import BottomSheetInfoTab from './BottomSheetInfoTab';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

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

  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

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
      {/*
      <div className="flex justify-end p-[0.75rem]">
        <button type="button" onClick={onModalOpen}>
          리뷰탭 만들어야하지롱 컴포넌트 분리해야하밍
        </button>
      </div>
       */}
      {/* Tab */}
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="정보" {...a11yProps(0)} />
            <Tab label="리뷰" {...a11yProps(1)} />
          </Tabs>
        </Box>
        {/* CustomTabPanel안에 기본적으로 padding이 사방들어감 */}
        <CustomTabPanel value={tabValue} index={0}>
          <BottomSheetInfoTab data={data} />
        </CustomTabPanel>
        <CustomTabPanel value={tabValue} index={1}>
          리뷰컴포넌트 넣기
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default BottomSheetInner;
