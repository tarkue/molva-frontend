import Button from '@/shared/ui/button';
import { useModals } from '@/shared/ui/modal';
import { useForm } from 'react-hook-form';

interface ConfirmButtonProps {
  type: 'DELETE' | 'COMPLAIN';
  text: string;
}

const ConfirmButton = ({ text, type }: ConfirmButtonProps) => {
  return (
    <div className="flex gap-6 flex-col w-full">
      <p className="text-body text-contrast w-full">{text}</p>
      <Button size="medium" type="submit" className="w-full">
        {type === 'DELETE' ? 'Удалить' : 'Пожаловаться'}
      </Button>
    </div>
  );
};

interface OpenConfirmRemoveFormProps {
  onSubmit: () => void;
}

export const useOpenConfirmRemoveForm = ({
  onSubmit,
  type,
  text,
}: OpenConfirmRemoveFormProps & ConfirmButtonProps) => {
  const form = useForm();
  const { addModal } = useModals();

  return () => {
    addModal({
      form: form,
      className: 'w-[593px]',
      title: 'Подтвердите удаление',
      buttons: <ConfirmButton text={text} type={type} />,
      onSubmit: onSubmit,
    });
  };
};
