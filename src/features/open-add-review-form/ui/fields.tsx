import { ReviewFormField } from '@/entity/review';
import { Discipline } from '@/shared/api';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { FormHeader } from './header';
import { loadTeachers } from '../api/load';

export const AddReviewFormFieldsAndHeader = <T extends FieldValues>({
  form,
  discipline,
}: {
  form: UseFormReturn<T, any>;
  discipline: Discipline;
}) => (
  <>
    <FormHeader discipline={discipline} />
    <ReviewFormField.Star form={form.control} />
    <ReviewFormField.Lector
      form={form.control}
      loadTeachers={loadTeachers(discipline)}
    />
    <ReviewFormField.Practic
      form={form.control}
      loadTeachers={loadTeachers(discipline)}
    />
    <ReviewFormField.Comment form={form.control} withPlaceholder />
    <ReviewFormField.IsAnonymous form={form.control} />
  </>
);
