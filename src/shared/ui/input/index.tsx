import { forwardRef } from 'react';
import { InputProps } from './props';
import { cn } from '@/shared/lib/utils';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, fieldState, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'transition-colors duration-300 flex w-full rounded-2xl border placeholder-gray border-base-08 bg-base-03 px-6 py-[14px] p-body hover:border-base-07 focus:border-base-07 file:border-0 file:bg-transparent file:font-caption focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          fieldState?.invalid && 'border-warn-red hover:border-gray',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
