import { forwardRef, useState } from 'react';
import Button from '../button';
import Icon from '../icon';
import { DescProps } from './props';

const Desc = forwardRef<HTMLButtonElement, DescProps>(
  ({ onDescChange, value = 0, ...props }, ref) => {
    const [desc, setDesc] = useState(value);

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (onDescChange) {
        onDescChange(desc ? 0 : 1);
      }
      setDesc((prev) => (prev ? 0 : 1));
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
