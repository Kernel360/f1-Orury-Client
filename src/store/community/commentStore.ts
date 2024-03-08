import { create } from 'zustand';
import { CommentStateProps } from '@/types/community/comment';

const useCommentStore = create<CommentStateProps>(set => ({
  commentId: 0,
  parentId: 0,
  triggerModify: false,
  isFocus: false,
  isEditMode: false,
  isReplyMode: false,
  setCommentId: value => set({ commentId: value }),
  setParentId: value => set({ parentId: value }),
  setTriggerModify: value => set({ triggerModify: value }),
  setIsFocus: value => set({ isFocus: value }),
  setIsEditMode: value => set({ isEditMode: value }),
  setIsReplyMode: value => set({ isReplyMode: value }),
}));

export default useCommentStore;
