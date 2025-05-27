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
      className='max-w-[50px] max-h-[50px] min-w-[50px] min-h-[50px]'
    >
      <Icon glyph={'add'} stroke="gray" />
    </Button>
  );
});
