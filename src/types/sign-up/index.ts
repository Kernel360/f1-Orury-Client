export interface SignUpState {
  isValidBirth: boolean;
  isValidGender: boolean;
  setIsValidBirth: (value: boolean) => void;
  setIsValidGender: (value: boolean) => void;
}

export interface PostSignUpProps {
  sign_up_type: number;
  email: string | null;
  nickname: string;
  gender: number;
  birthday: string;
  profile_image: string;
}

export interface SetTokensInCookiesProps {
  accessToken: string;
  refreshToken: string;
}

export interface TosProps {
  handleOpenModal: () => void;
}

export interface DateRangeType {
  startDate: string | null | Date;
  endDate: string | null | Date;
}

export type DateValueType = DateRangeType | null;
