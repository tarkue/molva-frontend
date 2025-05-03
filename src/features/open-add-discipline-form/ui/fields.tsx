import { DisciplineFormField } from '@/entity/discipline';
import { FieldValues, UseFormReturn } from 'react-hook-form';

export const AddDisciplineFormFields = <T extends FieldValues>({
  form,
}: {
  form: UseFormReturn<T, any>;
}) => (
  <>
    <DisciplineFormField.Name form={form.control} withPlaceholder />
    <DisciplineFormField.Module form={form.control} withPlaceholder />
    <DisciplineFormField.Format form={form.control} withPlaceholder />
    <DisciplineFormField.Description
      form={form.control}
      withPlaceholder
    />
    <DisciplineFormField.PresentationLink
      form={form.control}
      withPlaceholder
    />
    <DisciplineFormField.ModeusLink
      form={form.control}
      withPlaceholder
    />
  </>
);
