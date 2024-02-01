import { X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ModifyInputProps } from '@/types/common/modifyInput';
import { FormSchema, FormSchemaType } from '@/app/service/my-page/schema';

import * as F from '@/app/_components/ui/form';
import Button from '@/app/_components/buttons/Button';
import TextInput from '@/app/_components/common/TextInput';

function ModifyInput({ ...props }: ModifyInputProps) {
  const { inputTitle, value, setValue, isToggled, setIsToggled } = props;
  const beforeValue = value;

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      id: 2,
      nickname: value,
    },
  });

  const onSubmit = async () => {};

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
    <F.Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="px-4 flex flex-col justify-between z-50 w-full"
      >
        <div className={`${isToggled ? 'block' : 'hidden'} w-full`}>
          <span className="w-16 font-thin inline-block">{inputTitle}</span>
          <div className="relative">
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
              className="absolute right-2 top-[2px] cursor-pointer"
            >
              <X />
            </button>
          </div>
          <div className="flex justify-end w-full">
            <div className="flex gap-2 w-40 h-10 mt-8">
              <Button
                content="취소"
                onClick={cancelHandler}
                color="primary"
                outline
              />
              <Button content="변경" onClick={clickHandler} color="primary" />
            </div>
          </div>
        </div>
      </form>
    </F.Form>
  );
}

export default ModifyInput;
