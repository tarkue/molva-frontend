import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { scheme } from '@/shared/api';

const signInFormSchema = z.object({
  email: scheme.user.email,
  password: scheme.user.password,
});

const useSignInForm = () =>
  useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

export { useSignInForm, signInFormSchema };
