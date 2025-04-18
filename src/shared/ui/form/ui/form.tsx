import { cn } from '@/shared/lib/utils';
import { FieldValues, FormProvider } from 'react-hook-form';
import { FormProviderProps } from 'react-hook-form';

export interface FormProps<T extends FieldValues>
  extends FormProviderProps<T> {
  title?: string;
  actions?: React.ReactNode;
  onSubmit?: () => Promise<void> | void;
}

export function Form<T extends FieldValues>({
  children,
  title,
  actions,
  onSubmit,
  ...props
}: FormProps<T>) {
  return (
    <section className="flex flex-col gap-6 items-center justify-center bg-base-03 rounded-3xl w-full px-6 sm-max:px-8 py-12">
      <div>
        {title && <h1 className="text-contast text-h1">{title}</h1>}
        {actions}
      </div>
      <FormProvider {...props}>
        <form
          onSubmit={onSubmit}
          className="w-full flex flex-col gap-3"
        >
          {children}
        </form>
      </FormProvider>
    </section>
  );
}
