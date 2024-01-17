import { forwardRef } from 'react';

import { InputProps } from '@/types/ui/common/input';
import { Textarea } from '@/app/_components/ui/textarea';

const TextInput = forwardRef<HTMLTextAreaElement, InputProps>(
  ({ placeholder, defaultValue, onChange, value }, ref) => {
    return (
      <Textarea
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={defaultValue}
        value={value}
        ref={ref}
      />
    );
  },
);

export default TextInput;
