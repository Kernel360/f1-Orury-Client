import { forwardRef } from 'react';

import { InputProps } from '@/types/ui/common/input';
import { Textarea } from '@/app/_components/ui/textarea';

const TextInput = forwardRef<HTMLTextAreaElement, InputProps>(
  ({ placeholder, onChange, value }, ref) => {
    return (
      <Textarea
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        ref={ref}
      />
    );
  },
);

export default TextInput;
