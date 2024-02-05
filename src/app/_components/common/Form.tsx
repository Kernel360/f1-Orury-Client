'use client';

import TextInput from '@/app/_components/common/TextInput';
import Content from '@/app/_components/common/Content';
import post from '@/app/service/community/api/post';
import PhotoBooth from '@/app/service/community/_components/PhotoBooth';
import editPost from '@/app/service/community/api/editPost';
import usePostListInfinite from '@/hooks/community/usePostListInfinite';
import * as D from '@/app/_components/ui/dropdown-menu';
import * as F from '@/app/_components/ui/form';

import { useState } from 'react';
import { getFormData } from '@/utils/getFormData';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronsDown } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { Button } from '@/app/_components/ui/button';
import { CATEGORIES } from '@/constants/common/form';
import { useOnePostState, usePostsState } from '@/store/community/postsStore';
import { FormSchema, FormSchemaType } from '@/app/schema';
import { useToast } from '@/app/_components/ui/use-toast';
import type { FormType } from '@/types/common/form';

function Form({ ...props }: FormType) {
  const {
    postId,
    title,
    content,
    isPost,
    isPostDetail,
    isReview,
    setIsSheetOpen,
    editHandler,
  } = props;
  const { toast } = useToast();
  const { categoryId } = usePostsState();
  const { setTitle, setContent } = useOnePostState();
  const { mutate } = usePostListInfinite(categoryId);
  const [images, setImages] = useState<File[]>([]);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (data: FormSchemaType) => {
    if (isPost && setIsSheetOpen) {
      const formData = getFormData({ jsonData: JSON.stringify(data), images });

      const message = await post(formData);
      await mutate();
      setIsSheetOpen(false);

      toast({ variant: 'success', description: message });
    }

    if (isPostDetail && postId && editHandler) {
      const formData = getFormData({
        jsonData: JSON.stringify({ ...data, id: postId }),
        images,
      });

      await editPost(formData);
      await mutate();
      editHandler();
      setTitle(data.title);
      setContent(data.content);
    }

    if (isReview) {
      // API CALL
    }
  };

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
              <F.FormItem className="w-full flex flex-col">
                <D.DropdownMenu>
                  <D.DropdownMenuTrigger asChild>
                    <F.FormControl>
                      <Button
                        variant="underline"
                        role="combobox"
                        className={cn(
                          'w-full justify-between',
                          !field.value && 'text-muted-foreground',
                        )}
                      >
                        {field.value
                          ? CATEGORIES.find(
                              categoryValue =>
                                categoryValue.value === field.value,
                            )?.label
                          : '카테고리 선택'}
                        <ChevronsDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </F.FormControl>
                  </D.DropdownMenuTrigger>

                  <D.DropdownMenuContent className="w-screen max-w-[734px] p-0">
                    {CATEGORIES.map(category => (
                      <D.DropdownMenuItem
                        {...field}
                        className="bg-white justify-center"
                        textValue={category.label}
                        onSelect={() => {
                          form.setValue('category', category.value);
                        }}
                      >
                        {category.label}
                      </D.DropdownMenuItem>
                    ))}
                  </D.DropdownMenuContent>
                </D.DropdownMenu>
                <F.FormMessage className="text-warning pl-2 text-sm" />
              </F.FormItem>
            )}
          />

          {/* 글 제목 */}
          <F.FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <F.FormItem className="w-full flex flex-col">
                <F.FormControl>
                  <TextInput
                    placeholder="제목"
                    width="w-full"
                    defaultValue={title}
                    isFocus
                    {...field}
                  />
                </F.FormControl>
                <F.FormMessage className="text-warning pl-2 text-xs" />
              </F.FormItem>
            )}
          />

          {/* 글 내용 */}
          <F.FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <F.FormItem className="w-full flex flex-col">
                <F.FormControl>
                  <Content placeholder="글 내용" {...field} content={content} />
                </F.FormControl>
                <F.FormMessage className="text-warning pl-2 text-xs" />
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
