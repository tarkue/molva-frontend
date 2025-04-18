import { forwardRef, useState } from 'react';
import Button from '../button';
import Icon from '../icon';
import { DescProps } from './props';

const Desc = forwardRef<HTMLButtonElement, DescProps>(
  ({ onDescChange, ...props }, ref) => {
    const [desc, setDesc] = useState(false);

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setDesc((prev) => !prev);

      if (onDescChange) {
        onDescChange(desc);
      }
    };

    return (
      <Button
        variant="circle"
        onClick={clickHandler}
        ref={ref}
        {...props}
      >
        <Icon glyph={desc ? 'sort-desc' : 'sort-asc'} stroke="gray" />
      </Button>
    );
  },
);
Desc.displayName = 'Desc';

export { Desc };
