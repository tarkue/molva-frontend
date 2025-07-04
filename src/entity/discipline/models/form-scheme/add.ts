import { Format, scheme } from '@/shared/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const addDisciplineFormSchema = z.object({
  name: scheme.discipline.name,
  format: scheme.discipline.format,
  description: scheme.discipline.description,
  modeus_link: scheme.discipline.modeusLink,
  presentation_link: scheme.discipline.presentationLink,
  module: scheme.discipline.module,
});

export const useAddDisciplineForm = () => {
  return useForm<z.infer<typeof addDisciplineFormSchema>>({
    resolver: zodResolver(addDisciplineFormSchema),
    defaultValues: {
      name: '',
      format: Format.mixed,
      description: '',
      modeus_link: undefined,
      presentation_link: undefined,
      module: '',
    },
  });
};
