import { forwardRef } from 'react';
import Button from '../button';
import Icon from '../icon';
import { DescProps } from './props';

const SortOrderCircle = forwardRef<HTMLButtonElement, DescProps>(
  ({ onOrderChange, value = 'desc', ...props }, ref) => {
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (onOrderChange) {
        const newValue = value == 'desc' ? 'asc' : 'desc'
        onOrderChange(newValue);
      }
    };

    return (
      <Button
        variant="circle"
        onClick={clickHandler}
        className='max-w-[50px] max-h-[50px] min-w-[50px] min-h-[50px]'
        ref={ref}
        aria-label="change sort order"
        {...props}
      >
        {value == 'desc' ? <Icon
          glyph="sort-desc"
          stroke="gray"
        /> : <Icon
          glyph="sort-asc"
          stroke="gray"
        />}
      </Button>
    );
  },
);
SortOrderCircle.displayName = 'Sort order';

export { SortOrderCircle };
