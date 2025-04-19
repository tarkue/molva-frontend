import { Control, FieldValues } from 'react-hook-form';

export type DefaultFormFieldProps<T extends FieldValues> = {
  form: Control<T, any, T>;
  withPlaceholder?: boolean;
};
