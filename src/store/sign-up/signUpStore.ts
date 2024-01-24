import { SignUpState } from '@/types/sign-up';
import { create } from 'zustand';

const useSignUpState = create<SignUpState>(set => ({
  isValidBirth: false,
  isValidGender: false,
  setIsValidBirth: (value: boolean) => set({ isValidBirth: value }),
  setIsValidGender: (value: boolean) => set({ isValidGender: value }),
}));

export default useSignUpState;
