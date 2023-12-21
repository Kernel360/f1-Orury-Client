'use client';

import { ChangeEvent } from 'react';
import clsx from 'clsx';
import { TextareaProps } from '@/types/ui/common/textarea';

function Textarea({ placeholder }: TextareaProps) {
  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = '2em';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const textareaClass = clsx(
    'flex flex-wrap w-full h-auto resize-none overflow-hidden outline-none',
    'min-h-2em max-h-8em h-2em',
  );

  return (
    <textarea
      placeholder={placeholder}
      className={textareaClass}
      rows={1}
      onInput={handleInput}
    />
  );
}

export default Textarea;
