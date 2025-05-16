import { DefaultFormFieldProps, FormField } from '@/shared/ui/form';
import { FieldValues, Path } from 'react-hook-form';
import { AsyncMultiSelect } from '@/shared/ui/select';
import { FieldLabel } from '../models/field-label';
import { Pair } from '@/shared/ui/select/pair';
import { useState } from 'react';

export const DisciplineListField = <T extends FieldValues>(
  props: Omit<DefaultFormFieldProps<T>, 'withPlaceholder'> & {
    loadDisciplines: (
      input: string,
    ) => Promise<Pair<string, string>[]>;
    defaultDisciplines?: Pair<string, string>[];
  },
) => {
  const [selected, setSelected] = useState<
    readonly Pair<string, string>[]
  >(props.defaultDisciplines ?? []);
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
          value={selected}
          onChange={(e) => {
            if (!e) return;
            setSelected(e);
            field.onChange(e?.map((d) => d.value));
          }}
        />
      )}
    />
  );
};
