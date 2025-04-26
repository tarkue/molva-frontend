import { UserFormField } from '@/entity/user';
import { FieldValues, UseFormReturn } from 'react-hook-form';

export const FirstPartFields = <T extends FieldValues>({
  form,
}: {
  form: UseFormReturn<T, any>;
}) => <UserFormField.Email withPlaceholder form={form.control} />;

export const SecondPartFields = <T extends FieldValues>({
  form,
}: {
  form: UseFormReturn<T, any>;
}) => <UserFormField.Code form={form.control} />;

export const ThirdPartFields = <T extends FieldValues>({
  form,
}: {
  form: UseFormReturn<T, any>;
}) => (
  <>
    <UserFormField.NewPassword withPlaceholder form={form.control} />
    <UserFormField.ConfirmPassword
      withPlaceholder
      form={form.control}
    />
  </>
);
