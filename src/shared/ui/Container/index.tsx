import { forwardRef } from 'react';
import { cn } from '@/shared/lib/utils';
import { ContainerProps } from './props';

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn('max-w-[1100px] mx-auto w-full', className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  },
);
Container.displayName = 'Container';

export default Container;
