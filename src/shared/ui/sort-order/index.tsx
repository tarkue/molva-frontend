import { forwardRef } from 'react';
import Button from '../button';
import Icon from '../icon';
import { DescProps } from './props';

const SortOrderCircle = forwardRef<HTMLButtonElement, DescProps>(
  ({ onOrderChange, value = 'desc', ...props }, ref) => {
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (onOrderChange) {
        onOrderChange(value == 'desc' ? 'asc' : 'desc');
      }
    };

    return (
      <Button
        variant="circle"
        onClick={clickHandler}
        ref={ref}
        {...props}
      >
        <Icon
          glyph={value == 'desc' ? 'sort-desc' : 'sort-asc'}
          stroke="gray"
        />
      </Button>
    );
  },
);
SortOrderCircle.displayName = 'Sort order';

export { SortOrderCircle };
