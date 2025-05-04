import { DisciplineListField } from '@/entity/teacher';
import { UserFormField } from '@/entity/user';
import { FieldValues, UseFormReturn } from 'react-hook-form';

export const AddTeacherFormFields = <T extends FieldValues>({
  form,
}: {
  form: UseFormReturn<T, any>;
}) => (
  <>
    <UserFormField.Surname form={form.control} withPlaceholder />
    <UserFormField.FirstName form={form.control} withPlaceholder />
    <UserFormField.Patronymic form={form.control} withPlaceholder />
    <DisciplineListField form={form.control} />
  </>
);
