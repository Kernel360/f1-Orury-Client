import { SignInStateProps } from '@/types/sign-in';
import { create } from 'zustand';

const useSignInState = create<SignInStateProps>(set => ({
  // 1: KAKAO, 2: APPLE
  signUpType: 1,
  setSignUpType: (value: number) => set({ signUpType: value }),
}));

export default useSignInState;
