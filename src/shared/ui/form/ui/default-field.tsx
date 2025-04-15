import { Control, FieldValues } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../index';
import Input from '@/shared/ui/input';

interface DefaultFormFieldProps {
  form: Control<FieldValues>;
  name: string;
  required?: boolean | undefined;
  type?: React.HTMLInputTypeAttribute | undefined;
  label?: string | undefined;
  placeholder?: string | undefined;
}

const DefaultFormField = (props: DefaultFormFieldProps) => {
  return (
    <FormField
      control={props.form}
      name={props.name}
      render={({ field, fieldState }) => (
        <FormItem>
          {props.label && (
            <FormLabel>
              {props.label}
              {props.required && <span className="text-red">*</span>}
            </FormLabel>
          )}
          <FormControl aria-required={props.required}>
            <Input
              required={props.required}
              type={props.type}
              placeholder={props.placeholder}
              {...field}
              fieldState={fieldState}
              autoCapitalize="off"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export { DefaultFormField };
