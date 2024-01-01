import { InputProps } from '@/types/ui/common/input';
import { Textarea } from '@/app/_components/ui/textarea';

function TextInput({ placeholder, onChange, value }: InputProps) {
  return (
    <Textarea placeholder={placeholder} onChange={onChange} value={value} />
  );
}

export default TextInput;
