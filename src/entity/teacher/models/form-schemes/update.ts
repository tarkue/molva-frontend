import { scheme, Teacher } from '@/shared/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const updateTeacherFormSchema = z.object({
  first_name: scheme.user.firstName,
  surname: scheme.user.surname,
  patronymic: scheme.user.patronymic,
  disciplines: z.array(
    z.string().uuid({ message: 'Одна из дисциплин не найдена' }),
  ),
});

export const useUpdateTeacherForm = (teacher: Teacher) => {
  return useForm<z.infer<typeof updateTeacherFormSchema>>({
    resolver: zodResolver(updateTeacherFormSchema),
    defaultValues: {
      first_name: teacher.first_name,
      surname: teacher.surname,
      patronymic: teacher.patronymic,
      disciplines: teacher.disciplines.map((e) => e.id),
    },
  });
};
