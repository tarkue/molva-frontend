import { forwardRef } from 'react';
import { StarsProps } from './props';
import { cn } from '@/shared/lib/utils';

const Stars = forwardRef<HTMLDivElement, StarsProps>(
  ({ value, className, ...props }, ref) => {
    const starsWidth = (value / 5) * 142;

    return (
      <div
        className={cn('relative block w-[142px] h-[29px]', className)}
        aria-label={`${value} звезд`}
        ref={ref}
        {...props}
      >
        <i
          style={{
            maskImage: `url('/stars/active.svg')`,
          }}
          className="Star background-contrast"
        />
        <i
          style={{
            maskImage: `url('/stars/disable.svg')`,
            width: `${starsWidth}px`,
          }}
          className="Star background-contrast"
        />
      </div>
    );
  },
);
Stars.displayName = 'Stars';

export default Stars;
