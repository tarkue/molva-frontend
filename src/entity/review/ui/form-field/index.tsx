import {
  DefaultFormField,
  DefaultFormFieldProps,
} from '@/shared/ui/form';
import { FieldLabel } from '../../models/field-label';
import { FieldValues } from 'react-hook-form';
import { AsyncSelect } from '@/shared/ui/select';
import { useState } from 'react';
import { Pair } from '@/shared/ui/select/pair';
import { SingleValue } from 'react-select';
import { StarsInput } from '@/shared/ui/stars';
import { Checkbox } from '@/shared/ui/checkbox';
import { Label } from '@/shared/ui/label';

export const Practic = <T extends FieldValues>({
  form,
  withPlaceholder,
}: DefaultFormFieldProps<T>) => {
  const [value, setValue] =
    useState<SingleValue<Pair<string, string>>>();
  return (
    <>
      <AsyncSelect
        placeholder={FieldLabel.Practic}
        value={value}
        onChange={(e) => setValue(e)}
      />
      <fieldset className="hidden">
        <DefaultFormField
          required
          name="practic_id"
          label={withPlaceholder ? undefined : FieldLabel.Practic}
          placeholder={
            withPlaceholder ? FieldLabel.Practic : undefined
          }
          value={value?.value}
          type="text"
          form={form}
        />
      </fieldset>
    </>
  );
};

export const Lector = <T extends FieldValues>({
  form,
  withPlaceholder,
}: DefaultFormFieldProps<T>) => {
  const [value, setValue] =
    useState<SingleValue<Pair<string, string>>>();
  return (
    <>
      <AsyncSelect
        placeholder={FieldLabel.Lector}
        value={value}
        onChange={(e) => setValue(e)}
      />
      <fieldset className="hidden">
        <DefaultFormField
          required
          name="lector_id"
          label={withPlaceholder ? undefined : FieldLabel.Lector}
          placeholder={
            withPlaceholder ? FieldLabel.Practic : undefined
          }
          value={value?.value}
          type="text"
          form={form}
        />
      </fieldset>
    </>
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
  withPlaceholder,
}: DefaultFormFieldProps<T>) => {
  const [checked, onClick] = useState<boolean>(false);

  const toggleChecked = () => onClick((prev) => !prev);

  return (
    <>
      <fieldset className="flex justify-center">
        <Checkbox checked={checked} onChange={toggleChecked} />
        <Label onClick={toggleChecked} className="text-contrast">
          {FieldLabel.Anonymous}
        </Label>
      </fieldset>
      <fieldset className="sr-only">
        <DefaultFormField
          name="is_anonymous"
          label={withPlaceholder ? undefined : FieldLabel.Anonymous}
          placeholder={
            withPlaceholder ? FieldLabel.Anonymous : undefined
          }
          checked={checked}
          type="checkbox"
          form={form}
        />
      </fieldset>
    </>
  );
};

export const Star = <T extends FieldValues>({
  form,
  withPlaceholder,
}: DefaultFormFieldProps<T>) => {
  const state = useState<number>(0);
  return (
    <fieldset className="flex justify-center w-full py-3">
      <StarsInput state={state} />
      <fieldset className="sr-only">
        <DefaultFormField
          value={state[0].toString()}
          name="stars"
          label={withPlaceholder ? undefined : FieldLabel.Anonymous}
          placeholder={
            withPlaceholder ? FieldLabel.Anonymous : undefined
          }
          type="checkbox"
          form={form}
        />
      </fieldset>
    </fieldset>
  );
};
