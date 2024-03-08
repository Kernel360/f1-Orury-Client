import { ChangeEventHandler } from 'react';

export interface InputProps {
  placeholder: string;
  width: string;
  isFocus?: boolean;
  defaultValue?: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  value?: string;
}
