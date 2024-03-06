'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/app/_components/ui/button';
import { ReviewSchema, ReviewSchemaType } from '@/app/schema';

import Content from '@/app/_components/common/Content';
import PhotoBooth from '@/app/service/community/_components/PhotoBooth';
import * as F from '@/app/_components/ui/form';
import { X } from 'lucide-react';
import useReviewStore from '@/store/review/reviewStore';
import { aBeeZee } from '@/styles/fonts';
import { Rating, Skeleton } from '@mui/material';
import { getFormData } from '@/utils/getFormData';
import reviewApi from '@/apis/review/apis/review';
import { cn } from '@/lib/utils';
import { ReviewRegisterProps } from '@/types/review/ReviewProps';
import type {
  ReviewRegisterType,
  SubmitReviewType,
} from '@/types/review/review';

function ReviewRegisterModal({ gym_name, mutate }: ReviewRegisterProps) {
  const { closeMode, reviewState, state, reviewId } = useReviewStore();
  const initialValue = {
    newContent: '',
    newImages: [],
    newScore: 5,
    fixId: -1,
  };
  const [images, setImages] = useState<File[]>([]);
  const [registerValue, setRegisterValue] = useState<ReviewRegisterType>(
    () => initialValue,
  );

  const { newContent, newScore, fixId } = registerValue;

  const isOpen = state === 'create' || state === 'fix';

  const ModalClassName = cn(
    'w-full max-w-[768px] bg-white overflow-y-scroll duration-1000 h-full top-0 right-0 absolute bg-white',
    { 'opacity-0 z-0': !isOpen },
    { 'opacity-1 z-[1000]': isOpen },
  );

  const form = useForm<ReviewSchemaType>({
    resolver: zodResolver(ReviewSchema),
  });

  useEffect(() => {
    switch (state) {
      case 'fix': {
        const { prevContent, prevImages, prevScore, prevId } = reviewState;
        const prevState = {
          newContent: prevContent || '',
          newScore: prevScore || 5,
          fixId: prevId || -1,
        };
        setImages(prevImages || []);
        setRegisterValue(prevState);
        break;
      }
      default: {
        setRegisterValue(initialValue);
      }
    }
  }, [state]);

  const onSubmit = async (d: ReviewSchemaType) => {
    if (reviewId === null) return;
    let data: SubmitReviewType = {
      score: newScore,
      content: d.content || '',
    };

    switch (state) {
      case 'fix': {
        const formData = getFormData({
          jsonData: JSON.stringify(data),
          images,
        });
        await reviewApi.patchReview(fixId, formData);
        mutate();
        break;
      }
      case 'create': {
        data = {
          ...data,
          gym_id: reviewId,
        };
        const formData = getFormData({
          jsonData: JSON.stringify(data),
          images,
        });
        await reviewApi.postReview(formData);
        mutate();
        break;
      }
      default:
        break;
    }
    closeMode();
  };

  const RegisterContent = useMemo(() => {
    switch (state) {
      case 'create': {
        return {
          header: '리뷰 작성',
          submit: '작성 완료',
        };
      }
      case 'fix': {
        return {
          header: '리뷰 작성',
          submit: '작성 완료',
        };
      }
      default: {
        return {
          header: null,
          submit: null,
        };
      }
    }
  }, [state]);

  return (
    <div className={ModalClassName}>
      <div className=" h-[3.5rem] shadow flex items-center justify-center">
        <button type="button" className="absolute right-3" onClick={closeMode}>
          <X />
        </button>
        {RegisterContent.header}
      </div>
      <div
        className={`mx-4 pt-4 text-[20px] border-b border-primary ${aBeeZee.className}`}
      >
        {typeof gym_name !== 'undefined' ? (
          `${gym_name}`
        ) : (
          <Skeleton className="w-[140px] h-[54px] bg-gray-200" />
        )}
      </div>
      <F.Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-[768px] px-4 flex flex-col bottom-0 fixed justify-between w-full h-[calc(100%-7rem)]"
        >
          <div>
            <Rating
              name="rating"
              size="large"
              defaultValue={registerValue.newScore}
              onChange={(_, newValue) => {
                if (typeof newValue === 'number') {
                  setRegisterValue(prev => ({
                    ...prev,
                    newScore: newValue,
                  }));
                } else {
                  setRegisterValue(prev => ({
                    ...prev,
                    newScore: 1,
                  }));
                }
              }}
            />
            <div className="py-4 space-y-4 ">
              <F.FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <F.FormItem className="w-full flex flex-col">
                    <F.FormControl>
                      <Content
                        maxLength={520}
                        placeholder="리뷰 내용"
                        content={newContent}
                        {...field}
                      />
                    </F.FormControl>
                    <F.FormMessage className="text-warning pl-2 text-xs" />
                  </F.FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex flex-col items-end w-full gap-2 pb-4 z-50 bg-white">
            <PhotoBooth images={images} setImages={setImages} />
            <Button type="submit" color="white" className="w-full">
              {RegisterContent.submit}
            </Button>
          </div>
        </form>
      </F.Form>
    </div>
  );
}

export default ReviewRegisterModal;
