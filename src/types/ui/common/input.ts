import { ChangeEventHandler } from 'react';

export interface InputProps {
  placeholder: string;
  width: string;
  isFocus?: boolean;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  value?: string;
}
