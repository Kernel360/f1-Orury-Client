import { reply } from '$/community';
import clsx from 'clsx';
import Image from 'next/image';

function Deleted({ isChild }: { isChild?: boolean }) {
  const containerClass = clsx(
    'h-[5rem] flex justify-start items-center border-b py-4',
    {
      'px-4': !isChild,
      'bg-grey-100': isChild,
    },
  );

  return (
    <div className={containerClass}>
      {isChild && <Image src={reply} alt="답글" className="mr-4" />}
      <span className="text-grey-400 text-sm">
        {isChild ? '삭제된 답글입니다.' : '삭제된 댓글입니다.'}
      </span>
    </div>
  );
}

export default Deleted;
