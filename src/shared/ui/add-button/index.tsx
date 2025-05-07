import { forwardRef } from 'react';
import Button from '../button';
import Icon from '../icon';

export const AddButton = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ onClick, ...props }, ref) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <Button
      variant="circle"
      {...props}
      ref={ref}
      onClick={handleClick}
    >
      <Icon glyph={'add'} stroke="gray" />
    </Button>
  );
});
