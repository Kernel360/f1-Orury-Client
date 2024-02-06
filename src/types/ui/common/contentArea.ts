import { Dispatch, SetStateAction } from 'react';

export interface ContentAreaProps {
  placeholder: string;
  content?: string;
  maxLength?: number;

  setContent?: Dispatch<SetStateAction<string>>;
}
