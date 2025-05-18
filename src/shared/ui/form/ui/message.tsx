import { cn } from '@/shared/lib/utils';
import { FormPrompt } from './prompt';
import { useFormField } from '../hook/use-form-field';

const FormMessage = ({
  className,
  children,
}: React.HTMLAttributes<HTMLLabelElement>) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <FormPrompt
      id={formMessageId}
      className={cn('text-red', className)}
    >
      {body}
    </FormPrompt>
  );
};
FormMessage.displayName = 'FormMessage';

export { FormMessage };
