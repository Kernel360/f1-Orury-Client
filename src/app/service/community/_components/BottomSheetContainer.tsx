import { useRef } from 'react';
import useCss from '@/hooks/common/useCss';
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet';
import type { BottonSheetProps } from '@/types/community/bottomSheet';
import Form from '@/app/_components/common/Form';

function BottomSheetContainer({ ...props }: BottonSheetProps) {
  useCss('https://unpkg.com/react-spring-bottom-sheet/dist/style.css');

  const { bottomSheetTitle, isSheetOpen, setIsSheetOpen, onDisMiss } = props;
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
      defaultSnap={500}
      snapPoints={({ maxHeight }) => {
        return maxHeight;
      }}
      header={
        <h1 className="flex items-center text-xl justify-center font-bold text-gray-800">
          {bottomSheetTitle}
        </h1>
      }
      onDismiss={onDisMiss}
      expandOnContentDrag={isSheetOpen}
    >
      <Form setIsSheetOpen={setIsSheetOpen} isPost />
    </BottomSheet>
  );
}

export default BottomSheetContainer;
