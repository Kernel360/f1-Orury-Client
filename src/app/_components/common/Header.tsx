'use client';

import clsx from 'clsx';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Modal from '@/app/_components/common/Modal';
import { MODAL } from '@/constants/ui/common/modal';
import HeaderProps from '@/types/ui/common/header';
import { back, ellipsis, x_mark } from '$/header';
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from '@/app/_components/ui/menubar';

function Header({ title, isBack, isExit, isEllipsis }: HeaderProps) {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const router = useRouter();

  const onBackHandler = () => {
    router.back();
  };

  const cancelHandler = () => {
    setOpenDeleteModal(openDeleteModal => !openDeleteModal);
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

    return null;
  };

  return (
    <header className="sticky top-0 flex items-center justify-center h-12 bg-white z-10">
      <button
        type="button"
        onClick={onBackHandler}
        className={buttonClassName(isBack)}
      >
        {renderIcon()}
      </button>
      <span className="font-medium">{title}</span>
      <div className="absolute right-4">
        {isEllipsis && (
          <Menubar className="border-none">
            <MenubarMenu>
              <MenubarTrigger>
                <Image src={ellipsis} width={24} alt="더보기" />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarCheckboxItem className="bg-white">
                  수정
                </MenubarCheckboxItem>
                <MenubarCheckboxItem
                  className="text-warning bg-white"
                  onClick={cancelHandler}
                >
                  삭제
                </MenubarCheckboxItem>
              </MenubarContent>
            </MenubarMenu>
            {openDeleteModal && (
              <Modal
                title={MODAL.deletePost.title}
                content={MODAL.deletePost.content}
                okContent={MODAL.deletePost.okContent}
                cancelHandler={cancelHandler}
                okHandler={() => {}}
              />
            )}
          </Menubar>
        )}
      </div>
    </header>
  );
}

export default Header;
