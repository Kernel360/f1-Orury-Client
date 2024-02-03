import { Skeleton } from '@/app/_components/ui/skeleton';
import { v4 } from 'uuid';

function SearchSkeletonList() {
  const innerHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
  const skeletonHeight = Math.floor(innerHeight / 120);

  return (
    <div className="flex flex-col  h-full gap-8">
      {Array.from({ length: skeletonHeight }, () => (
        <div key={v4()} className="flex items-center space-x-4 h-16">
          <div className="w-full space-y-2">
            <Skeleton className="h-4 w-2/3 bg-grey-200" />
            <Skeleton className="h-4 w-1/2 bg-grey-200" />
          </div>
          <Skeleton className="h-[72px] w-[94px] rounded-xl bg-grey-200" />
        </div>
      ))}
    </div>
  );
}

export default SearchSkeletonList;
