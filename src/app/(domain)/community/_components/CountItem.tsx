'use client';

import { CountItemProps } from '@/types/community/counts';
import Image from 'next/image';
import { useMemo, useState } from 'react';

function CountItem({ icon, count, color, size, activeIcon }: CountItemProps) {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(count);

  const clickHandler = (isClicked: boolean) => {
    setIsClicked(!isClicked);
    setLikes(prevLikes => (isClicked ? prevLikes - 1 : prevLikes + 1));
  };

  const renderIcon = useMemo(() => {
    if (isClicked && activeIcon) return activeIcon;

    return icon;
  }, [isClicked, icon, activeIcon]);

  return activeIcon ? (
    <button
      type="button"
      className="flex gap-1 cursor-pointer items-center"
      onClick={() => clickHandler(isClicked)}
    >
      <Image src={renderIcon} alt={icon} width={size} />
      <span className={`${color}`}>{likes}</span>
    </button>
  ) : (
    <div className="flex gap-1 cursor-pointer items-center">
      <Image src={icon} alt={icon} width={size} />
      <span className={`${color}`}>{count}</span>
    </div>
  );
}

export default CountItem;
