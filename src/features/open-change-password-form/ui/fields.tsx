import { UserFormField } from '@/entity/user';
import { FieldValues, UseFormReturn } from 'react-hook-form';

export const ChangePasswordFormFields = <T extends FieldValues>({
  form,
}: {
  form: UseFormReturn<T, any>;
}) => (
  <>
    <UserFormField.OldPassword withPlaceholder form={form.control} />
    <UserFormField.Password withPlaceholder form={form.control} />
    <UserFormField.NewPassword withPlaceholder form={form.control} />
  </>
);
