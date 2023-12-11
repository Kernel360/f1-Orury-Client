'use client';

import TABS from '@/constants/community/tabs';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

function Tabs() {
  const pathname = usePathname();

  const liClassName = (path: string) => {
    return clsx('flex justify-center items-center border-b-4', {
      'border-b-purple-600': pathname === path,
      'border-b-white': pathname !== path,
    });
  };

  return (
    <ul className="grid h-10 grid-cols-3">
      {Object.values(TABS).map(tab => (
        <li key={tab.title} className={liClassName(tab.path)}>
          {tab.title}
        </li>
      ))}
    </ul>
  );
}

export default Tabs;
