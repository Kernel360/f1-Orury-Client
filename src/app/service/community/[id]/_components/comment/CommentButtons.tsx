'use client';

import * as M from '@/app/_components/ui/menubars';
import Modal from '@/app/_components/common/Modal';
import useCommentStore from '@/store/community/commentStore';
import deleteComment from '@/app/service/community/[id]/api/deleteComment';
import postCommentLike from '@/app/service/community/[id]/api/postCommentLike';
import deleteCommentLike from '@/app/service/community/[id]/api/deleteCommentLike';
import useCommentListApi from '@/hooks/community/useCommentList';

import { useState } from 'react';
import { Heart, MessageCircle, MoreVertical } from 'lucide-react';
import { MODAL } from '@/constants/ui/common/modal';
import { useToast } from '@/app/_components/ui/use-toast';
import { useDebouncedCallback } from 'use-debounce';
import type { CommentBtnProps } from '@/types/community/commentButtons';

function CommentButtons({ ...props }: CommentBtnProps) {
  const { toast } = useToast();
  const { commentId, isLike, setLikes, setIsLike, postId, parentId, isMine } =
    props;
  const { mutate } = useCommentListApi.useGetCommentList(postId);

  const [isClicked, setIsClicked] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const {
    setCommentId,
    triggerModify,
    setTriggerModify,
    setIsFocus,
    setIsEditMode,
    setIsReplyMode,
    setParentId,
  } = useCommentStore();

  const cancelHandler = () => {
    setOpenDeleteModal(openDeleteModal => !openDeleteModal);
  };

  const replyHandler = () => {
    if (commentId) {
      setParentId(commentId);
      setCommentId(commentId);
    }

    setIsReplyMode(true);
    setIsFocus(true);
  };

  const likeHandler = async () => {
    setIsClicked(!isClicked);
    setIsLike(isLike => !isLike);

    if (commentId) {
      if (isLike) {
        await deleteCommentLike({ comment_id: commentId });
      } else {
        await postCommentLike({ comment_id: commentId });
      }
      await mutate();
    }

    if (setLikes) {
      return isLike
        ? setLikes(likes => likes! - 1)
        : setLikes(likes => likes! + 1);
    }

    return null;
  };

  const modifyHandler = () => {
    if (commentId) {
      setCommentId(commentId);
      setIsEditMode(true);
    }
    setTriggerModify(!triggerModify);
  };

  const okHandler = useDebouncedCallback(async () => {
    if (commentId) await deleteComment({ commentId });
    await mutate();
    setOpenDeleteModal(openDeleteModal => !openDeleteModal);
    toast({
      title: '댓글 삭제',
      description: '댓글이 삭제되었습니다.',
      variant: 'warning',
      duration: 2000,
    });
  }, 300);

  return (
    <M.Menubar>
      {/* 댓글 */}
      {!parentId && (
        <M.MenubarMenu>
          <M.MenubarTrigger onClick={replyHandler}>
            <MessageCircle color="#96A2AC" size={16} strokeWidth={1.5} />
          </M.MenubarTrigger>
        </M.MenubarMenu>
      )}

      {/* 좋아요 */}
      <M.MenubarMenu>
        <M.MenubarTrigger onClick={likeHandler}>
          <Heart
            size={16}
            color="#96A2AC"
            strokeWidth={1.5}
            fill={isLike ? '#96A2AC' : '#fff'}
          />
        </M.MenubarTrigger>
      </M.MenubarMenu>

      {/* 더보기 */}
      {isMine && (
        <M.MenubarMenu>
          <M.MenubarTrigger>
            <MoreVertical color="#96A2AC" size={16} strokeWidth={1.5} />
          </M.MenubarTrigger>
          <M.MenubarContent>
            <M.MenubarCheckboxItem onClick={modifyHandler} className="bg-white">
              수정
            </M.MenubarCheckboxItem>
            <M.MenubarCheckboxItem
              className="text-warning bg-white"
              onClick={() => setOpenDeleteModal(true)}
            >
              삭제
            </M.MenubarCheckboxItem>
          </M.MenubarContent>
        </M.MenubarMenu>
      )}

      {openDeleteModal && (
        <Modal
          title={MODAL.deleteComment.title}
          content={MODAL.deleteComment.content}
          okContent={MODAL.deleteComment.okContent}
          cancelHandler={cancelHandler}
          okHandler={okHandler}
        />
      )}
    </M.Menubar>
  );
}

export default CommentButtons;
