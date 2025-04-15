import { Control, FieldValues } from 'react-hook-form';

export type DefaultFormFieldProps = {
  form: Control<FieldValues>;
  withPlaceholder?: boolean;
};
