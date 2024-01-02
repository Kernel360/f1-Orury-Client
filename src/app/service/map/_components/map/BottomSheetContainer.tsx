import { useRef } from 'react';
import { detailMarkerMock } from '@/__mock__/data/map.mock';
import useCss from '@/hooks/common/useCss';
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet';
import BottomSheetInner from '@/app/service/map/_components/map/BottomSheetInner';
import type { BottomSheetProps } from '@/types/map/BottomSheetProps';

/**
 * @description 바텀시트의 외부 컴포넌트입니다.
 * @param isSheetOpen 바텀 시트가 열려있는지 판단합니다. 해당 값으로 애니메이션을 적용합니다.
 * @param onDisMiss 바텀 시트가 끝까지 내려갔을 때 실행되는 함수입니다.
 * @param selectMarkerId 전달받은 markerId 값 (mapId) 값으로 상세정보를 불러옵니다.
 */
function BottomSheetContainer({
  isSheetOpen,
  onDisMiss,
  handleImageOpen,
  handleReviewOpen,
}: BottomSheetProps) {
  useCss('https://unpkg.com/react-spring-bottom-sheet/dist/style.css');

  const data = detailMarkerMock;
  const focusRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<BottomSheetRef>(null);

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
        return [200, maxHeight];
      }}
      header={(
        <h1 className="flex items-center text-xl justify-center font-bold text-gray-800">
          {data.title}
        </h1>
      )}
      onDismiss={onDisMiss}
      expandOnContentDrag={isSheetOpen}
    >
      <BottomSheetInner
        handleReviewOpen={handleReviewOpen}
        handleImageOpen={handleImageOpen}
        data={data}
      />
    </BottomSheet>
  );
}

export default BottomSheetContainer;
