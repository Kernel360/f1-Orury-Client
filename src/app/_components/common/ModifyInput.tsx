import { ModifyInputProps } from '@/types/common/modifyInput';
import { X } from 'lucide-react';
import TextInput from './TextInput';
import Button from '../buttons/Button';

function ModifyInput({
  inputTitle,
  value,
  setValue,
  isToggled,
  setIsToggled,
}: ModifyInputProps) {
  const beforeValue = value;

  const inputHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const clearHandler = () => {
    setValue('');
  };

  const cancelHandler = () => {
    setValue(beforeValue);
    setIsToggled(isToggled => !isToggled);
  };

  const clickHandler = () => {
    setIsToggled(isToggled => !isToggled);
  };

  return (
    <div className={`${isToggled ? 'block' : 'hidden'} w-full relative`}>
      <span className="w-16 font-thin inline-block">{inputTitle}</span>
      <TextInput
        placeholder={value}
        onChange={inputHandler}
        value={value}
        width="w-[calc(100%-4rem)]"
        isFocus
      />
      <button
        type="button"
        onClick={clearHandler}
        className="absolute right-2 top-1.5 cursor-pointer"
      >
        <X />
      </button>

      <div className="flex justify-end w-full">
        <div className="flex gap-2 w-40 h-10 mt-8">
          <X onClick={cancelHandler} color="black" />
          <Button content="변경" onClick={clickHandler} color="primary" />
        </div>
      </div>
    </div>
  );
}

export default ModifyInput;
