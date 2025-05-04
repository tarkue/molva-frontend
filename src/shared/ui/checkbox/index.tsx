import { cn } from '@/shared/lib/utils';
import { forwardRef, useId } from 'react';
import Icon from '../icon';

export type CheckBoxType = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
>;

const Checkbox = forwardRef<HTMLInputElement, CheckBoxType>(
  (props, ref) => {
    const id = useId();

    return (
      <div
        className={cn(
          'w-6 h-6 bg-base-07 rounded-[6px] relative flex justify-center items-center group',
        )}
      >
        <Icon
          glyph="check"
          size="16"
          className="invisible group-has-checked:nth-[1]:visible"
        />
        <label
          htmlFor={id}
          className="cursor-pointer w-full h-full absolute"
        ></label>
        <input
          {...props}
          id={id}
          ref={ref}
          type="checkbox"
          className="hidden"
        />
      </div>
    );
  },
);
Checkbox.displayName = 'Checkbox';

export { Checkbox };
