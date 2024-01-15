import clsx from 'clsx';
import { CornerDownRight } from 'lucide-react';

function Deleted({ isChild }: { isChild?: boolean }) {
  const containerClass = clsx(
    'h-[96px] flex justify-start items-center border-b py-4 bg-grey-50',
    {
      'px-4': !isChild,
      'bg-grey-100': isChild,
    },
  );

  return (
    <div className={containerClass}>
      {isChild && (
        <CornerDownRight size={16} color="#855AFF" strokeWidth={1.5} />
      )}
      <span className="text-grey-400 text-md">
        {isChild ? '삭제된 답글입니다.' : '삭제된 댓글입니다.'}
      </span>
    </div>
  );
}

export default Deleted;
