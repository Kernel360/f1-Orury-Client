export interface SignInStateProps {
  signUpType: number;
  setSignUpType: (value: number) => void;
}

export interface GetUserInfoProps {
  code: string | null;
  signUpType: number;
}

export interface UserInfoProps {
  id: number;
  sign_up_type: number;
  nickname: string;
  email: string;
  refresh_token: string;
  access_token: string;
}
