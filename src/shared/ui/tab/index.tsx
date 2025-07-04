import { cn } from '@/shared/lib/utils';
import { forwardRef } from 'react';
import { TabProps } from './props';

const Tab = forwardRef<HTMLDivElement, TabProps>(
  ({ className, active, onClick, children, ...props }, ref) => {
    return (
      <div
        role="tab"
        className={cn(
          'flex flex-col gap-2 cursor-pointer h-9 w-max',
          className,
        )}
        ref={ref}
        onClick={active ? undefined : onClick}
        {...props}
      >
        <span className="text-subhead text-contrast">{children}</span>
        {active ? (
          <span className="w-full h-1 bg-blue"></span>
        ) : (
          <></>
        )}
      </div>
    );
  },
);
Tab.displayName = 'Tab';

export default Tab;
