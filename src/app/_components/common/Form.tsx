'use client';

import autoResize from '@/utils/autoResize';
import TextInput from '@/app/_components/common/TextInput';
import post from '@/app/service/community/api/post';
import PhotoBooth from '@/app/service/community/_components/PhotoBooth';
import editPost from '@/app/service/community/api/editPost';
import * as R from '@/app/_components/ui/radio-group';
import * as F from '@/app/_components/ui/form';
import usePostListInfinite from '@/hooks/community/get/infinite/usePostListInfinite';

import { useState } from 'react';
import { getFormData } from '@/utils/getFormData';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/app/_components/ui/button';
import { useOnePostState, usePostsState } from '@/store/community/postsStore';
import { FormSchema, FormSchemaType } from '@/app/schema';
import { useToast } from '@/app/_components/ui/use-toast';
import { useDebouncedCallback } from 'use-debounce';
import { Textarea } from '@/app/_components/ui/textarea';
import type { FormType } from '@/types/common/form';

function Form({ ...props }: FormType) {
  const {
    postId,
    title,
    content,
    isPost,
    isPostDetail,
    setIsSheetOpen,
    editHandler,
    category,
  } = props;
  const { toast } = useToast();
  const { categoryId, setCategoryId } = usePostsState();
  const { setTitle, setContent } = useOnePostState();
  const { mutate } = usePostListInfinite(categoryId);
  const [images, setImages] = useState<File[]>([]);

  const form = useForm<FormSchemaType>({
    defaultValues: {
      category,
      title,
      content,
    },
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = useDebouncedCallback(async (data: FormSchemaType) => {
    if (isPost && setIsSheetOpen) {
      const formData = getFormData({ jsonData: JSON.stringify(data), images });
      const message = await post(formData);

      await mutate();
      setIsSheetOpen(false);

      toast({ variant: 'success', description: message, duration: 2000 });
    }

    if (isPostDetail && postId && editHandler) {
      const formData = getFormData({
        jsonData: JSON.stringify({ ...data, id: postId }),
        images,
      });

      const message = await editPost(formData);
      await mutate();
      editHandler();
      setTitle(data.title);
      setContent(data.content);

      toast({ variant: 'success', description: message, duration: 2000 });
    }
  }, 300);

  return (
    <F.Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="px-4 flex flex-col justify-between h-full-size-omit-nav z-50"
      >
        <div className="py-4 space-y-4">
          <F.FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <F.FormItem className="space-y-3">
                <F.FormMessage className="text-warning text-xs" />
                <F.FormControl>
                  <R.RadioGroup
                    onValueChange={value => {
                      field.onChange(Number(value));
                      setCategoryId(Number(value));
                    }}
                    defaultValue={category?.toString()}
                    className="flex space-x-2"
                  >
                    <F.FormItem className="flex items-center space-x-3 space-y-0">
                      <F.FormControl>
                        <R.RadioGroupItem value="1" />
                      </F.FormControl>
                      <F.FormLabel className="text-md">자유게시판</F.FormLabel>
                    </F.FormItem>
                    <F.FormItem className="flex items-center space-x-3 space-y-0">
                      <F.FormControl>
                        <R.RadioGroupItem value="2" />
                      </F.FormControl>
                      <F.FormLabel className="text-md">QnA</F.FormLabel>
                    </F.FormItem>
                  </R.RadioGroup>
                </F.FormControl>
              </F.FormItem>
            )}
          />

          {/* 글 제목 */}
          <F.FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <F.FormItem className="w-full flex flex-col">
                <F.FormMessage className="text-warning text-xs" />

                <F.FormControl>
                  <TextInput
                    placeholder="제목"
                    width="w-full"
                    defaultValue={title}
                    isFocus
                    {...field}
                  />
                </F.FormControl>
              </F.FormItem>
            )}
          />

          {/* 글 내용 */}
          <F.FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <F.FormItem className="w-full flex flex-col">
                <F.FormMessage className="text-warning text-xs" />
                <F.FormControl>
                  <Textarea
                    placeholder="글 내용"
                    className="resize-none border-none max-h-96"
                    defaultValue={content}
                    onKeyUp={e => autoResize(e.target as HTMLTextAreaElement)}
                    onKeyDown={e => autoResize(e.target as HTMLTextAreaElement)}
                    rows={10}
                    {...field}
                  />
                </F.FormControl>
              </F.FormItem>
            )}
          />
        </div>

        <div className="flex flex-col items-end w-full gap-2 pb-4 z-50 bg-white">
          <PhotoBooth images={images} setImages={setImages} />

          <Button type="submit" color="white" className="w-full">
            작성 완료
          </Button>
        </div>
      </form>
    </F.Form>
  );
}

export default Form;
