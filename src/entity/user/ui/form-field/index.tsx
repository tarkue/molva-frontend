import {
  DefaultFormField,
  DefaultFormFieldProps,
} from '@/shared/ui/form';
import { FieldLabel } from '../../models/field-label';
import BasePassword from './base-password';
import { FieldValues } from 'react-hook-form';

const Email = <T extends FieldValues>({
  form,
  withPlaceholder,
}: DefaultFormFieldProps<T>) => (
  <DefaultFormField
    required
    name="email"
    label={withPlaceholder ? undefined : FieldLabel.Email}
    placeholder={withPlaceholder ? FieldLabel.Email : undefined}
    type="email"
    form={form}
  />
);

const Surname = <T extends FieldValues>({
  form,
  withPlaceholder,
}: DefaultFormFieldProps<T>) => (
  <DefaultFormField
    required
    name="surname"
    label={withPlaceholder ? undefined : FieldLabel.Surname}
    placeholder={withPlaceholder ? FieldLabel.Surname : undefined}
    type="text"
    form={form}
  />
);

const Name = <T extends FieldValues>({
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

const Patronymic = <T extends FieldValues>({
  form,
  withPlaceholder,
}: DefaultFormFieldProps<T>) => (
  <DefaultFormField
    name="patronymic"
    label={withPlaceholder ? undefined : FieldLabel.Patronymic}
    placeholder={withPlaceholder ? FieldLabel.Patronymic : undefined}
    type="text"
    form={form}
  />
);

const Password = <T extends FieldValues>(
  props: DefaultFormFieldProps<T>,
) => <BasePassword {...props} />;

const OldPassword = <T extends FieldValues>(
  props: DefaultFormFieldProps<T>,
) => (
  <BasePassword
    label={FieldLabel.OldPassword}
    fieldName="oldPassword"
    {...props}
  />
);

const NewPassword = <T extends FieldValues>(
  props: DefaultFormFieldProps<T>,
) => (
  <BasePassword
    label={FieldLabel.NewPassword}
    fieldName="newPassword"
    {...props}
  />
);

const ConfirmPassword = <T extends FieldValues>(
  props: DefaultFormFieldProps<T>,
) => (
  <BasePassword
    label={FieldLabel.ConfirmPassword}
    fieldName="confirmPassword"
    {...props}
  />
);

export {
  Email,
  Password,
  OldPassword,
  NewPassword,
  ConfirmPassword,
  Name,
  Surname,
  Patronymic,
};
