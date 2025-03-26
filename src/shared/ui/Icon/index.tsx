import { forwardRef } from 'react';
import { IconProps } from './props';
import { cn } from '@/shared/lib/utils';

const Icon = forwardRef<HTMLSpanElement, IconProps>(
  ({ glyph, className, ...props }, ref) => {
    const iconStyle: React.CSSProperties = {
      maskImage: `url(/icons/${glyph}.svg)`,
      maskPosition: 'center center',
      maskRepeat: 'no-repeat',
    };

    return (
      <i
        className={cn('inline-block w-8 h-6 bg-no-repeat', className)}
        style={iconStyle}
        ref={ref}
        {...props}
      />
    );
  },
);
Icon.displayName = 'Icon';

export default Icon;
