import {
  DefaultFormField,
  DefaultFormFieldProps,
} from '@/shared/ui/form';
import { FieldLabel } from '../../models/field-label';
import { FieldValues } from 'react-hook-form';
import { Select } from '@/shared/ui/select';
import { Format as FormatEnum } from '@/shared/api';
import { getValue, enumToPair } from '@/shared/lib/enum-utils';
import { useState } from 'react';

const FormatPair = enumToPair(FormatEnum);

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

export const Format = <T extends FieldValues>({
  form,
  withPlaceholder,
}: DefaultFormFieldProps<T>) => {
  const [format, setFormat] = useState<FormatEnum>();
  return (
    <>
      <Select
        placeholder={withPlaceholder ? FieldLabel.Format : undefined}
        defaultInputValue={getValue(FormatEnum, format)}
        onChange={(e) => setFormat(e?.label as FormatEnum)}
        options={FormatPair}
      />
      <fieldset className="sr-only">
        <DefaultFormField
          required
          value={format}
          name="module"
          label={withPlaceholder ? undefined : FieldLabel.Format}
          placeholder={
            withPlaceholder ? FieldLabel.Format : undefined
          }
          type="text"
          form={form}
        />
      </fieldset>
    </>
  );
};
