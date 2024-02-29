export interface UserStateProps {
  signUpType: number;
  id: number;
  email: string;
  profile_image: string;
  category: string | null;
  setSignUpType: (value: number) => void;
  setId: (value: number) => void;
  setEmail: (value: string) => void;
  setCategory: (value: string | null) => void;
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

// APPLE auth 타입
interface ClientConfig {
  clientId: string;
  redirectURI: string;
  scope?: string;
  state?: string;
  nonce?: string;
  usePopup?: boolean;
}

interface Authorization {
  code: string;
  id_token: string;
  state?: string;
}

interface User {
  email: string;
  name: string;
}

interface SigninResponse {
  authorization: Authorization;
  user?: User;
}

declare global {
  interface Window {
    AppleID: {
      auth: {
        init: (config: ClientConfig) => void;
        signIn: (config?: ClientConfig) => Promise<SigninResponse>;
      };
    };
  }
}
