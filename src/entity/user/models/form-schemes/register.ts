import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { scheme } from '@/shared/api';

const registerFormSchema = z.object({
  email: scheme.user.email,
  surname: scheme.user.surname,
  firstName: scheme.user.firstName,
  patronymic: scheme.user.patronymic,
  password: scheme.user.password,
  confirmPassword: scheme.user.confirmPassword,
});

const useRegisterForm = () =>
  useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      surname: '',
      patronymic: '',
    },
  });

export { useRegisterForm, registerFormSchema };
