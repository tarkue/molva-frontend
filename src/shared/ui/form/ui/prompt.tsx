import { cn } from '@/shared/lib/utils';
import { useFormField } from '../hook/use-form-field';

const FormPrompt = ({
  id,
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { error } = useFormField();
  return (
    <div
      id={id}
      className={cn(
        'text-xs text-gray-500 px-[18px]',
        error && 'text-destructive',
        className,
      )}
    >
      {children}
    </div>
  );
};

export { FormPrompt };
