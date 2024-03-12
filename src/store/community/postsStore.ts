import { create } from 'zustand';
import {
  UsePostsStateProps,
  UseOnePostState,
  PostCountState,
} from '@/types/community/post';

export const usePostsState = create<UsePostsStateProps>(set => ({
  categoryId: 1,
  setCategoryId: id => set({ categoryId: id }),
}));

export const useOnePostState = create<UseOnePostState>(set => ({
  title: '',
  content: '',
  images: [],
  setTitle: value => set({ title: value }),
  setContent: value => set({ content: value }),
  setImages: value => set(state => ({ ...state, images: value })),
}));

export const postCountState = create<PostCountState>(set => ({
  likeCount: 0,
  commentCount: 0,
  setLikeCount: value => set({ likeCount: value }),
  setCommentCount: value => set({ commentCount: value }),
}));
