export interface SignUpState {
  isValidBirth: boolean;
  isValidGender: boolean;
  setIsValidBirth: (value: boolean) => void;
  setIsValidGender: (value: boolean) => void;
}

export interface PostSignUpProps {
  sign_up_type: number;
  email: string;
  nickname: string;
  gender: number;
  birthday: string;
  profile_image: string;
}
