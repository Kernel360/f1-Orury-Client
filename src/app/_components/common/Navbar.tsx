'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NAVBAR from '@/constants/ui/common/navbar';
import NavbarProps from '@/types/ui/common/navbar';
import {
  Home,
  Map,
  MessageSquareText,
  UserRound,
  UsersRound,
} from 'lucide-react';

function Navbar() {
  const pathname = usePathname();
  const HOME = '/service';

  const getInActiveIcon = (text: string) => {
    switch (text) {
      case '지도':
        return <Map color="#C3C6CC" strokeWidth={2} />;
      case '커뮤니티':
        return <MessageSquareText color="#C3C6CC" strokeWidth={2} />;
      case '홈':
        return <Home color="#C3C6CC" strokeWidth={2} />;
      case '크루':
        return <UsersRound color="#C3C6CC" strokeWidth={2} />;
      default:
        return <UserRound color="#C3C6CC" strokeWidth={2} />;
    }
  };

  const getActiveIcon = (text: string) => {
    switch (text) {
      case '지도':
        return <Map color="#fff" strokeWidth={1} fill="#855AFF" />;
      case '커뮤니티':
        return (
          <MessageSquareText stroke="#fff" strokeWidth={1} fill="#855AFF" />
        );
      case '홈':
        return <Home color="#fff" strokeWidth={1} fill="#855AFF" />;
      case '크루':
        return <UsersRound color="#855AFF" strokeWidth={2} fill="#855AFF" />;
      default:
        return <UserRound color="#855AFF" strokeWidth={2} fill="#855AFF" />;
    }
  };

  const renderIcons = ({ value }: { value: NavbarProps }) => {
    if (pathname === HOME && value.href === HOME) {
      return <Home color="#F8F8F8" strokeWidth={2} fill="#855AFF" />;
    }

    if (value.href !== HOME) {
      if (pathname.startsWith(value.href)) return getActiveIcon(value.text);
    }

    return getInActiveIcon(value.text);
  };

  const textClassName = (href: string) => {
    return clsx('text-center text-[10px]', {
      'text-primary':
        (pathname === HOME && href === HOME) ||
        (href !== HOME && pathname.startsWith(href)),

      'text-disabled': pathname !== href,
    });
  };

  return (
    <nav className="w-full h-12 flex justify-evenly pb-safe fixed z-2 bottom-0 max-w-[768px] bg-white">
      {Object.values(NAVBAR).map(value => (
        <Link href={value.href} key={value.href}>
          <div className="flex flex-col justify-evenly min-w-[32px] h-full items-center bg-white">
            {renderIcons({ value })}
            <span className={textClassName(value.href)}>{value.text}</span>
          </div>
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
