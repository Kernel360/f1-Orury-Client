'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import NAVBAR from '@/constants/ui/common/navbar';
import NavbarProps from '@/types/ui/navbar';

function Navbar() {
  const pathname = usePathname();

  const srcFinder = ({ value }: { value: NavbarProps }) => {
    if (pathname === value.href) return value.activeSrc;
    return value.inActiveSrc;
  };

  const textClassName = (href: string) =>
    clsx('text-center text-[10px]', {
      'text-primary': pathname === href,
      'text-grey-400': pathname !== href,
    });

  return (
    <nav className="w-full h-12 flex justify-evenly pb-safe fixed bottom-0 max-w-[768px]">
      {Object.values(NAVBAR).map(value => (
        <Link href={value.href} key={value.href}>
          <div className="flex flex-col justify-evenly min-w-[32px] h-full items-center">
            <Image src={srcFinder({ value })} alt={value.text} />
            <span className={textClassName(value.href)}>{value.text}</span>
          </div>
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
