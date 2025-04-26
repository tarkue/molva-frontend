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

const FirstName = <T extends FieldValues>({
  form,
  withPlaceholder,
}: DefaultFormFieldProps<T>) => (
  <DefaultFormField
    required
    name="name"
    label={withPlaceholder ? undefined : FieldLabel.FirstName}
    placeholder={withPlaceholder ? FieldLabel.FirstName : undefined}
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

const Code = <T extends FieldValues>({
  form,
  withPlaceholder,
}: DefaultFormFieldProps<T>) => (
  <DefaultFormField
    required
    name="code"
    label={
      withPlaceholder
        ? undefined
        : 'Вам на почту был выслан код для восстановления пароля. Введите его в поле ниже.'
    }
    placeholder={withPlaceholder ? 'Код' : undefined}
    type="text"
    form={form}
  />
);

export {
  Email,
  Password,
  OldPassword,
  NewPassword,
  ConfirmPassword,
  FirstName,
  Surname,
  Patronymic,
  Code,
};
