import { create } from 'zustand';
import { UsePostsStateProps, UseOnePostState } from '@/types/community/post';

export const usePostsState = create<UsePostsStateProps>(set => ({
  categoryId: 1,
  setCategoryId: id => set({ categoryId: id }),
}));

export const useOnePostState = create<UseOnePostState>(set => ({
  title: '',
  content: '',
  setTitle: value => set({ title: value }),
  setContent: value => set({ content: value }),
}));
