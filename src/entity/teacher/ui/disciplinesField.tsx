import { DefaultFormFieldProps, FormField } from '@/shared/ui/form';
import { FieldValues, Path } from 'react-hook-form';
import { AsyncMultiSelect } from '@/shared/ui/select';
import { FieldLabel } from '../models/field-label';
import { Pair } from '@/shared/ui/select/pair';

export const DisciplineListField = <T extends FieldValues>(
  props: Omit<DefaultFormFieldProps<T>, 'withPlaceholder'> & {
    loadDisciplines: (
      input: string,
    ) => Promise<Pair<string, string>[]>;
  },
) => {
  return (
    <FormField
      control={props.form}
      name={'disciplines' as Path<T>}
      render={({ field }) => (
        <AsyncMultiSelect
          placeholder={FieldLabel.Disciplines}
          aria-label={FieldLabel.Disciplines}
          defaultOptions
          cacheOptions
          isMulti
          loadOptions={props.loadDisciplines}
          {...field}
          onChange={(e) => field.onChange(e?.map((d) => d.value))}
        />
      )}
    />
  );
};
