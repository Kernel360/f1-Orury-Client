import { Dispatch, SetStateAction } from 'react';

export interface EditUserProps {
  nickname: string;
}

export interface ProfileProps {
  nickname: string;
  birthday: string;
  profile_image: string;
  email: string;
  gender: number;
  id: number;
}

export interface UserProps extends ProfileProps {
  sign_up_type: number;
}

export interface CommunityModalProps {
  searchText: string;
}

export interface ActivityProps {
  setState: Dispatch<SetStateAction<string>>;
}

export interface UserModalProps {
  user_profile_image: string;
  user_nickname: string;
  user_id: number;
}
