'use client';

import { useState } from 'react';
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
import { mutate } from 'swr';
import { BACK_URL } from '@/constants/api';
import { END_POINT } from '@/constants/api/end-point';

function ReviewRegisterModal({ gym_name }: { gym_name?: string }) {
  const { closeMode, setCreateMode, setFixMode, state, reviewId } =
    useReviewStore(state => state);

  const isOpen = state === 'create' || state === 'fix';

  const [ratingValue, setRatingValue] = useState<number>(5);
  const [images, setImages] = useState<string[]>([]);

  const form = useForm<ReviewSchemaType>({
    resolver: zodResolver(ReviewSchema),
  });

  const onSubmit = (d: ReviewSchemaType) => {
    if (reviewId === null) return;
    const data = {
      score: ratingValue,
      content: d.content ? d.content : '',
      gym_id: reviewId,
    };
    const formData = getFormData({ jsonData: JSON.stringify(data), images });

    switch (state) {
      case 'create':
        reviewApi.postReview(formData);
        break;
      case 'fix':
        reviewApi.patchReview(reviewId, formData);
        break;
    }

    mutate(`${BACK_URL}/${END_POINT.reviews.getReviews(reviewId, 0)}`);

    closeMode();
  };

  if (!isOpen) return <></>;
  return (
    <div className="w-full max-w-[768px] fixed z-[1000] bg-white px-1">
      <div className=" h-[3.5rem] shadow flex items-center justify-center">
        <button type="button" className="absolute right-3" onClick={closeMode}>
          <X />
        </button>
        {state === 'create'
          ? '리뷰 작성'
          : state === 'fix'
            ? '리뷰 수정'
            : gym_name}
      </div>
      <div
        className={`mx-4 pt-4 text-[20px] border-b border-primary ${aBeeZee.className}`}
      >
        {gym_name ? (
          `${gym_name}`
        ) : (
          <Skeleton className="w-[140px] h-[54px] bg-gray-200" />
        )}
      </div>
      <F.Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="px-4 flex flex-col bottom-0 fixed justify-between w-full h-[calc(100%-7rem)]"
        >
          <div>
            <Rating
              name="rating"
              size="large"
              value={ratingValue}
              onChange={(_, newValue) => {
                if (typeof newValue === 'number') {
                  setRatingValue(newValue);
                } else {
                  setRatingValue(1);
                }
              }}
            />
            <div className="py-4 space-y-4">
              <F.FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <F.FormItem className="w-full flex flex-col">
                    <F.FormControl>
                      <Content
                        maxLength={520}
                        placeholder="리뷰 내용"
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
              작성 완료
            </Button>
          </div>
        </form>
      </F.Form>
    </div>
  );
}

export default ReviewRegisterModal;
