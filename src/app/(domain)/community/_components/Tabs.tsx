'use client';

import TABS from '@/constants/community/tabs';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Tabs() {
  const pathname = usePathname();

  const liClassName = (path: string) => {
    return clsx('flex  border-b-4', {
      'border-b-purple-600': path.includes(pathname),
      'border-b-white': pathname !== path,
    });
  };

  const linkClassName = (path: string) => {
    return clsx('w-full h-full flex justify-center items-center', {
      'text-disabled': pathname !== path,
    });
  };

  return (
    <ul className="grid grid-cols-3 h-12">
      {Object.values(TABS).map(tab => (
        <li key={tab.title} className={liClassName(tab.path)}>
          <Link href={tab.path} className={linkClassName(tab.path)}>
            {tab.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Tabs;
