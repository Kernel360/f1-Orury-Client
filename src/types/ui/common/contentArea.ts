import { Dispatch, SetStateAction } from 'react';

export interface ContentAreaType {
  placeholder: string;
  content?: string;
  setContent?: Dispatch<SetStateAction<string>>;
}
