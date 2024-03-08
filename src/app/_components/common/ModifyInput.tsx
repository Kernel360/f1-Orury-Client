import * as F from '@/app/_components/ui/form';
import Button from '@/app/_components/buttons/Button';
import TextInput from '@/app/_components/common/TextInput';

import { useSWRConfig } from 'swr';
import { X } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ModifyInputProps } from '@/types/common/modifyInput';
import { FormSchema, FormSchemaType } from '@/app/service/user/schema';
import { editUserData } from '@/app/service/user/api/editUserData';
import { useToast } from '@/app/_components/ui/use-toast';

function ModifyInput({ ...props }: ModifyInputProps) {
  const { toast } = useToast();
  const { mutate } = useSWRConfig();
  const {
    inputTitle,
    value,
    setValue,
    isToggled,
    setIsToggled,
    originNickname,
  } = props;

  const clearCache = () => {
    mutate(() => true, undefined, { revalidate: false });
  };

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nickname: value,
    },
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async data => {
    await editUserData(data);
    setValue(data.nickname);

    clearCache();
    setIsToggled(isToggled => !isToggled);

    toast({
      variant: 'success',
      description: '닉네임이 변경되었습니다.',
      duration: 2000,
    });
  };

  const clearHandler = () => {
    form.setValue('nickname', '');
  };

  const cancelHandler = () => {
    setValue(originNickname);
    form.setValue('nickname', originNickname);
    setIsToggled(isToggled => !isToggled);
  };

  return (
    <F.Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="px-4 flex flex-col justify-between z-50 w-full"
      >
        <F.FormField
          control={form.control}
          name="nickname"
          render={({ field }) => (
            <div className={`${isToggled ? 'block' : 'hidden'} w-full`}>
              <span className="w-16 font-thin inline-block">{inputTitle}</span>

              <div className="relative">
                <TextInput
                  placeholder={`${value} (2글자 이상, 8글자 이하)`}
                  defaultValue={value}
                  width="w-[calc(100%-4rem)]"
                  isFocus
                  {...field}
                />

                {form.formState.errors.nickname && (
                  <p className="text-warning text-sm leading-5">
                    {form.formState.errors.nickname.message}
                  </p>
                )}

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

                  <Button content="변경" color="primary" submit />
                </div>
              </div>
            </div>
          )}
        />
      </form>
    </F.Form>
  );
}

export default ModifyInput;
