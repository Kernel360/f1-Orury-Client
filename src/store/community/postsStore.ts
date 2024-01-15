import { create } from 'zustand';
import { PostsStateProps, OnePostProps } from '@/types/community/post';

export const usePostsState = create<PostsStateProps>(set => ({
  categoryId: 1,
  setCategoryId: id => set({ categoryId: id }),
}));

export const useOnePostState = create<OnePostProps>(set => ({
  title: '',
  content: '',
  setTitle: value => set({ title: value }),
  setContent: value => set({ content: value }),
}));
