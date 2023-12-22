import { InputProps } from '@/types/ui/common/input';
import clsx from 'clsx';

function Input({ placeholder, onChange, isFocus, value, width }: InputProps) {
  const inputClassName = clsx(
    ` outline-none break-word border-b-2 py-2 pr-4 w-${width}`,
    {
      'focus:border-b-primary': isFocus,
    },
  );
  return (
    <input
      className={inputClassName}
      placeholder={placeholder}
      type="text"
      onChange={onChange}
      value={value}
    />
  );
}

export default Input;
