export interface InputProps {
  placeholder: string;
  width: string;
  isFocus?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}
