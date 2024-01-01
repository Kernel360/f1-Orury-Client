import Image from 'next/image';
import { ModifyInputProps } from '@/types/common/modifyInput';
import { x_mark } from '$/header';
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
        <Image src={x_mark} alt="삭제" />
      </button>

      <div className="flex justify-end w-full">
        <div className="flex gap-2 w-40 h-10 mt-8">
          <Button
            content="취소"
            onClick={cancelHandler}
            color="black"
            outline
          />
          <Button content="변경" onClick={clickHandler} color="primary" />
        </div>
      </div>
    </div>
  );
}

export default ModifyInput;
