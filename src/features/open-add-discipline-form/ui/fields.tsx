import { DisciplineFormField } from '@/entity/discipline';
import { FieldValues, UseFormReturn } from 'react-hook-form';

export const AddDisciplineFormFields = <T extends FieldValues>({
  form,
}: {
  form: UseFormReturn<T, any>;
}) => (
  <>
    <DisciplineFormField.Name form={form.control} />
    <DisciplineFormField.Module form={form.control} />
    <DisciplineFormField.Format form={form.control} />
    <DisciplineFormField.Description form={form.control} />
    <DisciplineFormField.PresentationLink form={form.control} />
    <DisciplineFormField.ModeusLink form={form.control} />
  </>
);
