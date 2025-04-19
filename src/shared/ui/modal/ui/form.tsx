import { Form } from '../../form';
import { useModal } from '../context/hooks';
import { DefaultFormModalProps } from '../models/form-modal-props';
import { CloseModal } from './close';
import { FieldValues } from 'react-hook-form';

type FormModalProps<T extends FieldValues> =
  DefaultFormModalProps<T> & {
    id: number;
  };

export const DefaultFormModal = <T extends FieldValues>({
  id,
  title,
  form,
  className,
  fields,
  buttons,
  onSubmit,
}: FormModalProps<T>) => {
  const { isOpen, close } = useModal(id);

  if (!isOpen) return null;

  return (
    <Form
      title={title}
      className={className}
      actions={<CloseModal close={close} />}
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
