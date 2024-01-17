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
import { COLOR } from '@/styles/color';

function Navbar() {
  const pathname = usePathname();
  const HOME = '/service';
  const { grey300, white, primary } = COLOR;

  const getInActiveIcon = (text: string) => {
    switch (text) {
      case '지도':
        return <Map color={grey300} strokeWidth={2} />;
      case '커뮤니티':
        return <MessageSquareText color={grey300} strokeWidth={2} />;
      case '홈':
        return <Home color={grey300} strokeWidth={2} />;
      case '크루':
        return <UsersRound color={grey300} strokeWidth={2} />;
      default:
        return <UserRound color={grey300} strokeWidth={2} />;
    }
  };

  const getActiveIcon = (text: string) => {
    switch (text) {
      case '지도':
        return <Map color={white} strokeWidth={1} fill={primary} />;
      case '커뮤니티':
        return (
          <MessageSquareText stroke={white} strokeWidth={1} fill={primary} />
        );
      case '홈':
        return <Home color={white} strokeWidth={1} fill={primary} />;
      case '크루':
        return <UsersRound color={primary} strokeWidth={2} fill={primary} />;
      default:
        return <UserRound color={primary} strokeWidth={2} fill={primary} />;
    }
  };

  const renderIcons = ({ value }: { value: NavbarProps }) => {
    if (pathname === HOME && value.href === HOME) {
      return <Home color="#F8F8F8" strokeWidth={2} fill={primary} />;
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
