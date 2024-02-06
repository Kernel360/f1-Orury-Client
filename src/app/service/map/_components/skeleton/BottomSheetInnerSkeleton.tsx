import { aBeeZee } from '@/styles/fonts';
import { Skeleton } from '@/app/_components/ui/skeleton';
import { cn } from '@/lib/utils';

function BottomSheetInnerSkeleton() {
  return (
    <>
      <div className="p-[0.75rem]">
        <div className="flex gap-[0.75rem]">
          <Skeleton className="w-[110px] h-[110px] bg-gray-200" />
          <div className={cn(aBeeZee.className, 'flex gap-1 flex-col')}>
            <Skeleton className="w-[40px] h-[17px] bg-gray-200" />
            <Skeleton className="w-[60px] h-[21px] bg-gray-200" />
            <Skeleton className="w-[100px] h-[16px] bg-gray-200" />
            <Skeleton className="w-[200px] h-[16px] bg-gray-200" />
            <Skeleton className="w-[70px] h-[21px] bg-gray-200" />
            <Skeleton className="w-[50px] h-[16px] bg-gray-200" />
          </div>
        </div>
      </div>
      <div className="shadow-custom-line h-[1px] py-1" />
      <div className="p-[0.75rem] text-m text-purple-500">
        <div className="flex gap-2 flex-col">
          <Skeleton className="w-[100px] h-[16px] bg-gray-200" />
          <Skeleton className="w-[100px] h-[16px] bg-gray-200" />
          <Skeleton className="w-[160px] h-[16px] bg-gray-200" />
        </div>
      </div>
      <div className="shadow-custom-line h-[1px] py-1" />
      <div className="flex justify-between p-[0.75rem]">
        <span>
          <Skeleton className="w-[50px] h-[16px] bg-gray-200" />
        </span>
        <span>
          <Skeleton className="w-[80px] h-[16px] bg-gray-200" />
        </span>
      </div>
      <div className="flex gap-4 mx-0 my-auto justify-center">
        <Skeleton className="w-[120px] h-[104px] bg-gray-200" />
        <Skeleton className="w-[120px] h-[104px] bg-gray-200" />
        <Skeleton className="w-[120px] h-[104px] bg-gray-200" />
      </div>
      <div className="shadow-custom-line h-[1px] py-3" />
      <div className="flex justify-end p-[0.75rem]">
        <Skeleton className="w-[120px] h-[16px] bg-gray-200" />
      </div>
      <div className="flex p-[0.75rem] h-[11rem]">
        <div className="w-[8rem] flex gap-5 flex-col items-center justify-center justify-items-center">
          <Skeleton className="w-[48px] h-[36px] bg-gray-200" />
          <Skeleton className="w-[66px] h-[62px] bg-gray-200" />
        </div>
        <Skeleton className="w-[293px] h-[152px] bg-gray-200" />
      </div>
      <div className="shadow-custom-line h-[1px] py-1" />
      <div className="flex p-[0.75rem] h-[11rem]">
        <Skeleton className="w-full h-[120px] mt-2 bg-gray-200" />
      </div>
      <div className="shadow-border h-[1px]" />
    </>
  );
}

export default BottomSheetInnerSkeleton;
