import {
  DefaultFormField,
  DefaultFormFieldProps,
  FormField,
} from '@/shared/ui/form';
import { FieldLabel } from '../../models/field-label';
import { FieldValues, Path } from 'react-hook-form';
import { Select } from '@/shared/ui/select';
import { Format as FormatEnum } from '@/shared/api';
import { useState } from 'react';
import { Pair } from '@/shared/ui/select/pair';

export const Name = <T extends FieldValues>({
  form,
  withPlaceholder,
}: DefaultFormFieldProps<T>) => (
  <DefaultFormField
    required
    name="name"
    label={withPlaceholder ? undefined : FieldLabel.Name}
    placeholder={withPlaceholder ? FieldLabel.Name : undefined}
    type="text"
    form={form}
  />
);

export const Description = <T extends FieldValues>({
  form,
  withPlaceholder,
}: DefaultFormFieldProps<T>) => (
  <DefaultFormField
    required
    name="description"
    label={withPlaceholder ? undefined : FieldLabel.Description}
    placeholder={withPlaceholder ? FieldLabel.Description : undefined}
    type="text"
    form={form}
  />
);

export const PresentationLink = <T extends FieldValues>({
  form,
  withPlaceholder,
}: DefaultFormFieldProps<T>) => (
  <DefaultFormField
    required
    name="presentation_link"
    label={withPlaceholder ? undefined : FieldLabel.presentationLink}
    placeholder={
      withPlaceholder ? FieldLabel.presentationLink : undefined
    }
    type="url"
    form={form}
  />
);

export const ModeusLink = <T extends FieldValues>({
  form,
  withPlaceholder,
}: DefaultFormFieldProps<T>) => (
  <DefaultFormField
    required
    name="modeus_link"
    label={withPlaceholder ? undefined : FieldLabel.modeusLink}
    placeholder={withPlaceholder ? FieldLabel.modeusLink : undefined}
    type="url"
    form={form}
  />
);

export const Module = <T extends FieldValues>({
  form,
  withPlaceholder,
}: DefaultFormFieldProps<T>) => (
  <DefaultFormField
    required
    name="module"
    label={withPlaceholder ? undefined : FieldLabel.Module}
    placeholder={withPlaceholder ? FieldLabel.Module : undefined}
    type="text"
    form={form}
  />
);

const formatList = Object.values(FormatEnum).map((el) => ({
  label: el,
  value: el,
}));

export const Format = <T extends FieldValues>({
  form,
  withPlaceholder,
}: DefaultFormFieldProps<T>) => {
  const [selected, setSelected] = useState<Pair<string, string>>({
    label: formatList[0].label,
    value: formatList[0].value,
  });
  return (
    <>
      <FormField
        name={'format' as Path<T>}
        control={form}
        render={({ field, fieldState }) => (
          <Select
            placeholder={
              withPlaceholder ? FieldLabel.Format : undefined
            }
            {...field}
            value={selected}
            invalid={fieldState.invalid}
            onChange={(e) => {
              if (!e) return;
              field.onChange(e.value);
              setSelected(e);
            }}
            options={formatList}
          />
        )}
      />
    </>
  );
};
