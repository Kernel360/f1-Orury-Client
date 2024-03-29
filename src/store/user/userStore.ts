import { UserStateProps } from '@/types/sign-in';
import { create } from 'zustand';

const useUserStore = create<UserStateProps>(set => ({
  // 1: KAKAO, 2: APPLE
  signUpType: 1,

  // 유저 고유 ID
  id: 0,

  // 유저 고유 EMAIL
  email: null,

  profile_image: 'default-user-profile',

  category: null,

  setSignUpType: (value: number) => set({ signUpType: value }),
  setId: (value: number) => set({ id: value }),
  setEmail: (value: string | null) => set({ email: value }),
  setCategory: (value: string | null) => set({ category: value }),
}));

export default useUserStore;
