import { create } from 'zustand';
import { PostsStateProps } from '@/types/community/posts';

const usePostsState = create<PostsStateProps>(set => ({
  categoryId: 1,
  setCategoryId: id => set({ categoryId: id }),
}));

export default usePostsState;
