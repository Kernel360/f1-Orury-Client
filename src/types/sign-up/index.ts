export interface SignUpState {
  isValidBirth: boolean;
  isValidGender: boolean;
  setIsValidBirth: (value: boolean) => void;
  setIsValidGender: (value: boolean) => void;
}
