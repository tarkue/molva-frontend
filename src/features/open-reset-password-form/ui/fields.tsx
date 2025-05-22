import { UserFormField } from '@/entity/user';
import { FieldValues, UseFormReturn } from 'react-hook-form';

export const ResetPasswordFields = <T extends FieldValues>({
  form,
}: {
  form: UseFormReturn<T, any>;
}) => (
  <>
    <UserFormField.Password withPlaceholder form={form.control} />
    <UserFormField.ConfirmPassword
      withPlaceholder
      form={form.control}
    />
  </>
);
