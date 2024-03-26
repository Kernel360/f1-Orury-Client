import { useRef } from 'react';
import useCss from '@/hooks/common/useCss';
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet';
import BottomSheetInner from '@/app/service/map/_components/bottom-sheet/BottomSheetInner';
import type { BottomSheetProps } from '@/types/map/BottomSheetProps';
import { Skeleton } from '@mui/material';
import useMap from '@/apis/map/hooks/useMap';
import BottomSheetInnerSkeleton from '../skeleton/BottomSheetInnerSkeleton';
import BottomSheetHeader from './BottomSheetHeader';
/**
 * @description 바텀시트의 외부 컴포넌트입니다.
 * @param isSheetOpen 바텀 시트가 열려있는지 판단합니다. 해당 값으로 애니메이션을 적용합니다.
 * @param onDisMiss 바텀 시트가 끝까지 내려갔을 때 실행되는 함수입니다.
 * @param selectMarkerId 전달받은 markerId 값 (mapId) 값으로 상세정보를 불러옵니다.
 */
function BottomSheetContainer({
  isSheetOpen,
  onDisMiss,
  selectId,
}: BottomSheetProps) {
  useCss('https://unpkg.com/react-spring-bottom-sheet/dist/style.css');

  const { data, isLoading } = useMap.useGetDetail(selectId);
  const focusRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<BottomSheetRef>(null);
  const isDataNull = typeof data === 'undefined' || isLoading;
  console.log('====', data?.data.data, typeof data?.data.data);

  return (
    <BottomSheet
      open={isSheetOpen}
      skipInitialTransition
      ref={sheetRef}
      blocking={false}
      draggable={!isSheetOpen}
      initialFocusRef={focusRef}
      defaultSnap={200}
      snapPoints={({ maxHeight }) => {
        return [250, maxHeight];
      }}
      header={
        <header className="h-[220px]">
          {data?.data.data ? (
            <BottomSheetHeader
              name={data.data.data.name}
              address={data.data.data.address}
              instagram_link={data.data.data.instagram_link}
              is_like={data.data.data.is_like}
              gym_type={data.data.data.gym_type}
              phone_number={data.data.data.phone_number}
            />
          ) : (
            <Skeleton className="w-[100px] h-[28px] bg-gray-200" />
          )}
        </header>
      }
      onDismiss={onDisMiss}
      expandOnContentDrag={isSheetOpen}
    >
      {isDataNull ? (
        <BottomSheetInnerSkeleton />
      ) : (
        <BottomSheetInner data={data.data.data} />
      )}
    </BottomSheet>
  );
}

export default BottomSheetContainer;
