import { cn } from '@/shared/lib/utils';

interface NumberProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number | '...';
  active?: boolean;
}

const Number = ({
  value,
  active,
  className,
  ...props
}: NumberProps) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center p-[4px] w-[32px] text-body rounded-lg cursor-pointer select-none',
        active ? 'bg-blue text-white' : 'text-contrast',
        className,
      )}
      {...props}
    >
      {value}
    </div>
  );
};

export default Number;
