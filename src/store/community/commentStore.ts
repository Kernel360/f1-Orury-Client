import { create } from 'zustand';
import { CommentStateProps } from '@/types/community/comment';

const useCommentStore = create<CommentStateProps>(set => ({
  commentId: 0,
  triggerModify: false,
  setCommentId: value => set({ commentId: value }),
  setTriggerModify: value => set({ triggerModify: value }),
}));

export default useCommentStore;
