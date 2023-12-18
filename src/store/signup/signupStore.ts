import { SignupState } from '@/types/signup';
import { create } from 'zustand';

const useSignupState = create<SignupState>(set => ({
  isValidBirth: false,
  isValidGender: false,
  setIsValidBirth: (value: boolean) => set({ isValidBirth: value }),
  setIsValidGender: (value: boolean) => set({ isValidGender: value }),
}));

export default useSignupState;
