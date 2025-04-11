import { cn } from '@/shared/lib/utils';
import { forwardRef } from 'react';

const Link = forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, children, ...props }, ref) => {
  return (
    <a
      className={cn(
        'text-body text-dark-blue hover:text-blue cursor-pointer',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </a>
  );
});
Link.displayName = 'Link';

export default Link;
