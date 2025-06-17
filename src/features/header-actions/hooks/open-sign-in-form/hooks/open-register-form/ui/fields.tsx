import { UserFormField } from '@/entity/user';
import { FieldValues, UseFormReturn } from 'react-hook-form';

export const RegisterFormFields = <T extends FieldValues>({
  form,
}: {
  form: UseFormReturn<T>;
}) => (
  <>
    <UserFormField.Email form={form.control} />
    <UserFormField.Surname form={form.control} />
    <UserFormField.FirstName form={form.control} />
    <UserFormField.Patronymic form={form.control} />
    <UserFormField.Password form={form.control} />
    <UserFormField.ConfirmPassword form={form.control} />
  </>
);
