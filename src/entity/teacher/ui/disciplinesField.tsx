import {
  DefaultFormFieldProps,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/shared/ui/form';
import { FieldValues, Path } from 'react-hook-form';
import { AsyncSelect } from '@/shared/ui/select';
import { FieldLabel } from '../models/field-label';

export const DisciplineListField = <T extends FieldValues>(
  props: Omit<DefaultFormFieldProps<T>, 'withPlaceholder'>,
) => {
  return (
    <FormField
      control={props.form}
      name={'disciplines' as Path<T>}
      render={({ field }) => (
        <FormItem>
          <FormControl aria-required="true">
            {
              <AsyncSelect
                required
                placeholder={FieldLabel.Disciplines}
                aria-label={FieldLabel.Disciplines}
                {...field}
              />
            }
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
