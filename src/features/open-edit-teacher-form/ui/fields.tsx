import { DisciplineListField } from '@/entity/teacher';
import { UserFormField } from '@/entity/user';
import { loadDisciplines } from '@/features/open-add-teacher-form/api/load';
import { Pair } from '@/shared/ui/select/pair';
import { FieldValues, UseFormReturn } from 'react-hook-form';

export const EditTeacherFormFields = <T extends FieldValues>({
  form,
  defaultDisciplines,
}: {
  form: UseFormReturn<T, any>;
  defaultDisciplines: Pair<string, string>[];
}) => (
  <>
    <UserFormField.Surname form={form.control} withPlaceholder />
    <UserFormField.FirstName form={form.control} withPlaceholder />
    <UserFormField.Patronymic form={form.control} withPlaceholder />
    <DisciplineListField
      form={form.control}
      loadDisciplines={loadDisciplines}
      defaultDisciplines={defaultDisciplines}
    />
  </>
);
