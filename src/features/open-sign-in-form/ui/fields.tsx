import { UserFormField } from '@/entity/user';
import { FieldValues, UseFormReturn } from 'react-hook-form';

export const SignInFormFields = <T extends FieldValues>({
  form,
}: {
  form: UseFormReturn<T>;
}) => {
  return (
    <>
      <UserFormField.Email form={form.control} />
      <UserFormField.Password form={form.control} />
    </>
  );
};
