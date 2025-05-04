import { scheme } from '@/shared/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const addTeacherFormSchema = z.object({
  first_name: scheme.user.firstName,
  surname: scheme.user.surname,
  patronymic: scheme.user.patronymic,
  disciplines: z.array(
    z.string().uuid({ message: 'Одна из дисциплин не найдена' }),
  ),
});

export const useAddTeacherForm = () => {
  return useForm<z.infer<typeof addTeacherFormSchema>>({
    resolver: zodResolver(addTeacherFormSchema),
    defaultValues: {
      first_name: '',
      surname: '',
      patronymic: '',
      disciplines: [],
    },
  });
};
