import { forwardRef } from 'react';
import Button from '../button';
import Icon from '../icon';

export const AddButton = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => (
  <Button variant="circle" {...props} ref={ref}>
    <Icon glyph={'add'} stroke="gray" />
  </Button>
));
