import { Control, FieldValues, Path } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../index';
import Input from '@/shared/ui/input';

interface DefaultFormFieldProps<T extends FieldValues> {
  form: Control<T, string, T>;
  name: string;
  value?: string;
  required?: boolean | undefined;
  type?: React.HTMLInputTypeAttribute | undefined;
  label?: string | undefined;
  placeholder?: string | undefined;
  withPlaceholder?: boolean;
}

const DefaultFormField = <T extends FieldValues>(
  props: DefaultFormFieldProps<T>,
) => {
  return (
    <FormField
      control={props.form}
      name={props.name as Path<T>}
      render={({ field, fieldState }) => (
        <FormItem>
          {props.label && (
            <FormLabel>
              {props.label}
              {props.required && (
                <span className="text-red">{' *'}</span>
              )}
            </FormLabel>
          )}
          <FormControl aria-required={props.required}>
            {
              <Input
                required={props.required}
                type={props.type}
                placeholder={props.placeholder}
                aria-describedby={props.name}
                {...field}
                value={props.value ? props.value : field.value}
                fieldState={fieldState}
                autoCapitalize="off"
              />
            }
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export { DefaultFormField };
