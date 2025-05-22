import { UserFormField } from '@/entity/user';
import { FieldValues, UseFormReturn } from 'react-hook-form';

export const ForgotPasswordFields = <T extends FieldValues>({
  form,
}: {
  form: UseFormReturn<T, any>;
}) => <UserFormField.Email withPlaceholder form={form.control} />;
