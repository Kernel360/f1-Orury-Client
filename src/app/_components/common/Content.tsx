import clsx from 'clsx';
import { forwardRef, ChangeEvent } from 'react';
import { ContentAreaProps } from '@/types/ui/common/contentArea';

const Content = forwardRef<HTMLTextAreaElement, ContentAreaProps>(
  ({ placeholder, content, maxLength, ...props }, ref) => {
    const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
      e.target.style.height = '2em';
      // eslint-disable-next-line no-nested-ternary
      e.target.style.height = maxLength
        ? maxLength < e.target.scrollHeight
          ? `${maxLength}px`
          : `${e.target.scrollHeight}px`
        : `${e.target.scrollHeight}px`;
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
        defaultValue={content}
        onInput={handleInput}
        ref={ref}
        {...props}
      />
    );
  },
);

export default Content;
