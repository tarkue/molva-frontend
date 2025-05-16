import Button from '@/shared/ui/button';
import { useForm } from 'react-hook-form';

export const AddDisciplineFormButtons = () => {
  const form = useForm();
  const handle = () => console.log(form);
  return (
    <Button size="medium" type="submit" onClick={handle}>
      Сохранить
    </Button>
  );
};
