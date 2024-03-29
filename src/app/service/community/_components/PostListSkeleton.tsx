import { Skeleton } from '@/app/_components/ui/skeleton';
import { v4 } from 'uuid';
import { useEffect, useState } from 'react';

function PostListSkeleton() {
  const [skeletonHeight, setSkeletonHeight] = useState(0);

  useEffect(() => {
    const calculateSkeletonHeight = () => {
      const innerHeight =
        typeof window !== 'undefined' ? window.innerHeight : 0;
      const height = Math.floor(innerHeight / 120);
      setSkeletonHeight(height);
    };

    calculateSkeletonHeight();
    window.addEventListener('resize', calculateSkeletonHeight);
    return () => {
      window.removeEventListener('resize', calculateSkeletonHeight);
    };
  }, []);

  return (
    <div className="flex flex-col  h-full gap-8 pt-8">
      {Array.from({ length: skeletonHeight }, () => (
        <div key={v4()} className="flex items-center space-x-4 h-16">
          <Skeleton className="h-12 w-14 rounded-full bg-grey-50" />
          <div className="w-full space-y-2">
            <Skeleton className="h-4 w-2/3 bg-grey-50" />
            <Skeleton className="h-4 w-1/2 bg-grey-50" />
          </div>
          <Skeleton className="h-12 w-14 rounded-xl bg-grey-50" />
        </div>
      ))}
    </div>
  );
}

export default PostListSkeleton;
