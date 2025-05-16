import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const addAdminFormSchema = z.object({
  id: z.string(),
});

export const useAddAdminForm = () => {
  return useForm<z.infer<typeof addAdminFormSchema>>({
    resolver: zodResolver(addAdminFormSchema),
    defaultValues: {
      id: '',
    },
  });
};
