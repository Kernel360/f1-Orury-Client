import { Dispatch, SetStateAction } from 'react';

export interface ModifyInputProps {
  inputTitle: string;
  value: string;
  isToggled: boolean;
  setValue: Dispatch<SetStateAction<string>>;
  setIsToggled: Dispatch<SetStateAction<boolean>>;
}
