import { ReviewFormField } from '@/entity/review';
import { Discipline } from '@/shared/api';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { FormHeader } from './header';

export const AddReviewFormFieldsAndHeader = <T extends FieldValues>({
  form,
  discipline,
}: {
  form: UseFormReturn<T, any>;
  discipline: Discipline;
}) => (
  <>
    <FormHeader discipline={discipline} />
    <ReviewFormField.Star form={form.control} withPlaceholder />
    <ReviewFormField.Lector form={form.control} withPlaceholder />
    <ReviewFormField.Practic form={form.control} withPlaceholder />
    <ReviewFormField.Comment form={form.control} withPlaceholder />
    <ReviewFormField.IsAnonymous form={form.control} />
  </>
);
