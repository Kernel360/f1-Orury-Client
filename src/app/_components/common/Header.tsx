'use client';

import clsx from 'clsx';
import Modal from '@/app/_components/common/Modal';
import HeaderProps from '@/types/ui/common/header';
import deletePost from '@/app/service/community/[id]/api/deletePost';
import usePostListInfinite from '@/hooks/community/get/infinite/usePostListInfinite';
import * as M from '@/app/_components/ui/menubars';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ChevronLeft, MoreVertical, X } from 'lucide-react';
import { usePostsState } from '@/store/community/postsStore';
import { MODAL } from '@/constants/ui/common/modal';
import { useDebouncedCallback } from 'use-debounce';
import { useToast } from '@/app/_components/ui/use-toast';

function Header({ ...props }: Partial<HeaderProps>) {
  const { title, isBack, isExit, isEllipsis, editHandler, exitHandler } = props;
  const { toast } = useToast();
  const { categoryId } = usePostsState();
  const { mutate } = usePostListInfinite(categoryId);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const onBackHandler = () => {
    router.back();
  };

  const cancelHandler = () => {
    setOpenDeleteModal(openDeleteModal => !openDeleteModal);
  };

  const okHandler = useDebouncedCallback(async () => {
    const message = await deletePost({ postId: Number(params.id) });
    await mutate();
    setOpenDeleteModal(openDeleteModal => !openDeleteModal);

    router.back();
    toast({ variant: 'success', description: message, duration: 2000 });
  }, 300);

  const buttonClassName = (isBack?: boolean) => {
    return clsx('absolute', {
      'left-4': isBack,
      'right-4': !isBack,
    });
  };

  return (
    <header className="sticky top-0 flex items-center justify-center h-12 bg-white z-10">
      <button
        type="button"
        onClick={onBackHandler}
        className={buttonClassName(isBack)}
      >
        {isBack && <ChevronLeft />}
      </button>
      <span className="font-medium">{title}</span>
      <div className="absolute right-4 h-6">
        {isEllipsis && (
          <M.Menubar className="border-none">
            <M.MenubarMenu>
              <M.MenubarTrigger>
                <MoreVertical />
              </M.MenubarTrigger>
              <M.MenubarContent>
                <M.MenubarCheckboxItem
                  onClick={editHandler}
                  className="bg-white"
                >
                  수정
                </M.MenubarCheckboxItem>
                <M.MenubarCheckboxItem
                  className="text-warning bg-white"
                  onClick={cancelHandler}
                >
                  삭제
                </M.MenubarCheckboxItem>
              </M.MenubarContent>
            </M.MenubarMenu>
            {openDeleteModal && (
              <Modal
                title={MODAL.deletePost.title}
                content={MODAL.deletePost.content}
                okContent={MODAL.deletePost.okContent}
                cancelHandler={cancelHandler}
                okHandler={okHandler}
              />
            )}
          </M.Menubar>
        )}
        {isExit && (
          <button type="button" onClick={exitHandler}>
            <X />
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
