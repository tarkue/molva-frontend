import {
  DefaultFormField,
  DefaultFormFieldProps,
  FormField,
} from '@/shared/ui/form';
import { FieldLabel } from '../../models/field-label';
import {
  ControllerRenderProps,
  FieldValues,
  Path,
} from 'react-hook-form';
import { AsyncSelect } from '@/shared/ui/select';
import { useState } from 'react';
import { Pair } from '@/shared/ui/select/pair';
import { SingleValue } from 'react-select';
import { StarsInput } from '@/shared/ui/stars';
import { Checkbox } from '@/shared/ui/checkbox';
import { Label } from '@/shared/ui/label';

type FormFieldWithLoadTeacher<T extends FieldValues> =
  DefaultFormFieldProps<T> & {
    loadTeachers: (
      search: string,
    ) => Promise<Pair<string, string>[] | []>;
  };

export const Practic = <T extends FieldValues>({
  form,
  loadTeachers,
}: FormFieldWithLoadTeacher<T>) => {
  const [value, setValue] =
    useState<SingleValue<Pair<string, string>>>();
  return (
    <FormField
      name={'practic_id' as Path<T>}
      control={form}
      render={({ field }) => (
        <AsyncSelect
          placeholder={FieldLabel.Practic}
          {...field}
          defaultOptions
          cacheOptions
          loadOptions={loadTeachers}
          value={value}
          onChange={(e) => {
            field.onChange(e?.value);
            setValue(e);
          }}
        />
      )}
    />
  );
};

export const Lector = <T extends FieldValues>({
  form,
  loadTeachers,
}: FormFieldWithLoadTeacher<T>) => {
  const [value, setValue] =
    useState<SingleValue<Pair<string, string>>>();
  return (
    <FormField
      name={'lector_id' as Path<T>}
      control={form}
      render={({ field }) => (
        <AsyncSelect
          placeholder={FieldLabel.Lector}
          {...field}
          defaultOptions
          cacheOptions
          loadOptions={loadTeachers}
          value={value}
          onChange={(e) => {
            setValue(e);
            field.onChange(e?.value);
          }}
        />
      )}
    />
  );
};

export const Comment = <T extends FieldValues>({
  form,
  withPlaceholder,
}: DefaultFormFieldProps<T>) => (
  <DefaultFormField
    required
    name="comment"
    label={withPlaceholder ? undefined : FieldLabel.Comment}
    placeholder={withPlaceholder ? FieldLabel.Comment : undefined}
    type="text"
    form={form}
  />
);

export const IsAnonymous = <T extends FieldValues>({
  form,
}: DefaultFormFieldProps<T>) => {
  const [checked, onClick] = useState<boolean>(false);

  const onChange = (field: ControllerRenderProps<T, any>) => () => {
    field.onChange(!checked);
    onClick((prev) => !prev);
  };

  return (
    <FormField
      name={'is_anonymous' as Path<T>}
      control={form}
      render={({ field }) => (
        <span className="flex justify-center gap-1">
          <Checkbox checked={checked} onChange={onChange(field)} />
          <Label onClick={onChange(field)} className="text-contrast">
            {FieldLabel.Anonymous}
          </Label>
        </span>
      )}
    />
  );
};

export const Star = <T extends FieldValues>({
  form,
}: DefaultFormFieldProps<T>) => {
  const [stars, setStars] = useState<number>(0);
  return (
    <fieldset className="flex justify-center w-full py-3">
      <FormField
        name={'grade' as Path<T>}
        control={form}
        render={({ field }) => (
          <StarsInput
            state={[
              stars,
              (new_count) => {
                field.onChange(new_count);
                setStars(new_count);
              },
            ]}
          />
        )}
      />
    </fieldset>
  );
};
