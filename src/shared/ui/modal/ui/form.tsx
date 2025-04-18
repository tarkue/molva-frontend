import Button from '../../button';
import { Form } from '../../form';
import { CloseModal } from './close';
import {
  FieldValues,
  FormProviderProps,
  SubmitHandler,
} from 'react-hook-form';

export interface DefaultFormModalProps<T extends FieldValues> {
  title?: string;
  form: FormProviderProps<T>;
  fields?: React.ReactNode;
  buttons?: React.ReactNode;
  onSubmit: SubmitHandler<T>;
}

export const DefaultFormModal = <T extends FieldValues>({
  title,
  form,
  fields,
  buttons,
  onSubmit,
}: DefaultFormModalProps<T>) => {
  return (
    <Form
      title={title}
      actions={<CloseModal />}
      onSubmit={form.handleSubmit(onSubmit)}
      {...form}
    >
      {fields}
      <div className="flex justify-center items-center gap-6">
        {buttons}
      </div>
    </Form>
  );
};
