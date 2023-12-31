'use client';

import { FirstReviewModalProps } from '@/types/map/ReviewProps';
import { useState } from 'react';
import { X } from 'lucide-react';
import { Rating } from '@mui/material';

function FirstReviewModal({ title, isFirst }: FirstReviewModalProps) {
  const [isOpen, setIsOpen] = useState<boolean>(isFirst);
  return (
    <div>
      {isOpen && (
        <div className="z-[102] absolute bg-white top-0 w-full h-screen">
          <X
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2"
            size={36}
          />
          <div className="flex h-full justify-center items-center flex-col">
            <h3 className="text-2xl">{title}</h3>
            <h4>처음 방문 하셨나요?</h4>
            <Rating size="large" readOnly />
            <h3 className="p-2 bg-primary text-white mt-3">
              리뷰 작성 페이지로
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default FirstReviewModal;
