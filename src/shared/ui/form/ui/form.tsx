import { cn } from '@/shared/lib/utils';
import { FormProvider } from 'react-hook-form';
import { FormProviderProps } from 'react-hook-form';

export interface FormProps extends FormProviderProps {
  title?: string;
  titleAlign: 'left' | 'center' | 'right';
  onSubmit: () => Promise<void> | void;
}

const Form = ({
  children,
  title,
  onSubmit,
  titleAlign = 'center',
  ...props
}: FormProps) => {
  return (
    <section className="flex flex-col gap-6 items-center justify-center bg-base-03 rounded-3xl w-full px-6 sm-max:px-8 py-12">
      {title && (
        <h1
          className={cn('text-h1 text-contast', `text-${titleAlign}`)}
        >
          {title}
        </h1>
      )}
      <FormProvider {...props}>
        <form
          onSubmit={onSubmit}
          className="w-full flex flex-col gap-4"
        >
          {children}
        </form>
      </FormProvider>
    </section>
  );
};

export { Form };
