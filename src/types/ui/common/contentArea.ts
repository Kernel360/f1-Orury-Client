import { Dispatch, SetStateAction } from 'react';

export interface ContentAreaProps {
  placeholder: string;
  content?: string;

  setContent?: Dispatch<SetStateAction<string>>;
}
