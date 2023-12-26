'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CommentBtnProps } from '@/types/community/commentButtons';
import { comment, ellipsis, thumbsUp } from '$/user';
import { like_active_grey } from '$/community/active';
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from '@/app/_components/ui/MenuBar';
import Modal from '@/app/ui/common/Modal';
import { MODAL } from '@/constants/ui/common/modal';

function CommentButtons({ isLike, setLikes, setIsLike }: CommentBtnProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const cancelHandler = () => {
    setIsDelete(isDelete => !isDelete);
  };

  const thumbsUpHandler = () => {
    setIsClicked(!isClicked);
    setIsLike(isLike => !isLike);

    if (setLikes) {
      return isLike
        ? setLikes(likes => likes! - 1)
        : setLikes(likes => likes! + 1);
    }

    return null;
  };

  return (
    <Menubar>
      {/* 댓글 */}
      <MenubarMenu>
        <MenubarTrigger>
          <Image src={comment} width={16} alt="댓글" />
        </MenubarTrigger>
      </MenubarMenu>

      {/* 좋아요 */}
      <MenubarMenu>
        <MenubarTrigger onClick={thumbsUpHandler}>
          <Image
            src={isLike ? like_active_grey : thumbsUp}
            width={16}
            alt="좋아요"
          />
        </MenubarTrigger>
      </MenubarMenu>

      {/* 더보기 */}
      <MenubarMenu>
        <MenubarTrigger>
          <Image src={ellipsis} width={16} alt="더보기" />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>수정</MenubarCheckboxItem>
          <MenubarCheckboxItem
            className="text-warning"
            onClick={() => setIsDelete(true)}
          >
            삭제
          </MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
      {isDelete && (
        <Modal
          title={MODAL.deleteComment.title}
          content={MODAL.deleteComment.content}
          okContent={MODAL.deleteComment.okContent}
          cancelHandler={cancelHandler}
          okHandler={() => {}}
        />
      )}
    </Menubar>
  );
}

export default CommentButtons;
