import * as React from 'react';

import { cn } from '@/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, defaultValue, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex w-full border-b pb-2 border-b-grey-200 focus:border-b-purple-400 bg-background ring-offset-background placeholder:text-grey-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        defaultValue={defaultValue}
        ref={ref}
        rows={1}
        {...props}
      />
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };
