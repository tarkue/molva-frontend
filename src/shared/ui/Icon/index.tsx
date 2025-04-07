import { forwardRef } from 'react';
import { IconProps } from './props';
import { IconVariants } from './variants';

const Icon = forwardRef<HTMLElement, IconProps>(
  ({ size, stroke, glyph, className = '' }, ref) => {
    const iconStyle: React.CSSProperties = {
      maskImage: `url(/icons/${glyph}.svg)`,
      maskPosition: 'center center',
      maskRepeat: 'no-repeat',
    };

    return (
      <i
        className={IconVariants({ size, stroke, className })}
        style={iconStyle}
        ref={ref}
      />
    );
  },
);
Icon.displayName = 'Icon';

export default Icon;
