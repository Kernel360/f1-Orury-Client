export interface UserStateProps {
  signUpType: number;
  id: number;
  email: string;
  profile_image: string;
  setSignUpType: (value: number) => void;
  setId: (value: number) => void;
  setEmail: (value: string) => void;
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
