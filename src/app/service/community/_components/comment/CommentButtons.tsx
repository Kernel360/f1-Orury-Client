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
} from '@/app/_components/ui/menuBar';
import Modal from '@/app/_components/common/Modal';
import { MODAL } from '@/constants/ui/common/modal';
import useCommentStore from '@/store/community/commentStore';

function CommentButtons({ id, isLike, setLikes, setIsLike }: CommentBtnProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const { setCommentId, triggerModify, setTriggerModify } = useCommentStore();

  const cancelHandler = () => {
    setOpenDeleteModal(openDeleteModal => !openDeleteModal);
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

  const modifyHandler = () => {
    if (id) setCommentId(id);
    setTriggerModify(!triggerModify);
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
          <MenubarCheckboxItem onClick={modifyHandler} className="bg-white">
            수정
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            className="text-warning bg-white"
            onClick={() => setOpenDeleteModal(true)}
          >
            삭제
          </MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
      {openDeleteModal && (
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
