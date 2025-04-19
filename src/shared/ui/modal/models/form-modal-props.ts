import {
  FieldValues,
  SubmitHandler,
  UseFormReturn,
} from 'react-hook-form';

export interface DefaultFormModalProps<T extends FieldValues> {
  title?: string;
  form: UseFormReturn<T>;
  className?: string;
  fields?: React.ReactNode;
  buttons?: React.ReactNode;
  onSubmit: SubmitHandler<T>;
}
