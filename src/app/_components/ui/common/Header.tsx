'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { back, ellipsis, x_mark } from '$/header';
import HeaderProps from '@/types/ui/common/header';
import { useRouter } from 'next/navigation';

function Header({ title, isBack, isExit, isEllipsis }: HeaderProps) {
  const router = useRouter();

  // TODO: 추후 클릭 핸들러 연결
  const onClick = () => {
    router.back();
  };

  const buttonClassName = (isBack?: boolean) => {
    return clsx('absolute', {
      'left-4': isBack,
      'right-4': !isBack,
    });
  };

  const renderIcon = () => {
    if (isBack) return <Image src={back} alt={title} />;
    if (isExit) return <Image src={x_mark} alt={title} />;
    if (isEllipsis) return <Image src={ellipsis} alt={title} />;

    return null;
  };

  return (
    <header className="sticky top-0 flex items-center justify-center h-12 bg-white z-10 ">
      <button
        type="button"
        onClick={onClick}
        className={buttonClassName(isBack)}
      >
        {renderIcon()}
      </button>
      <span className="font-medium">{title}</span>
    </header>
  );
}

export default Header;
