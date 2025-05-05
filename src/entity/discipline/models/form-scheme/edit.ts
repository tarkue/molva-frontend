import { Discipline, scheme } from '@/shared/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const updateDisciplineFormSchema = z.object({
  name: scheme.discipline.name,
  format: scheme.discipline.format,
  description: scheme.discipline.description,
  modeus_link: scheme.discipline.modeusLink,
  presentation_link: scheme.discipline.presentationLink,
  module_id: z.string(),
});

export const useUpdateDisciplineForm = (discipline: Discipline) => {
  return useForm<z.infer<typeof updateDisciplineFormSchema>>({
    resolver: zodResolver(updateDisciplineFormSchema),
    defaultValues: {
      name: discipline.name,
      format: discipline.format,
      description: discipline.description,
      modeus_link: discipline.modeus_link,
      presentation_link: discipline.presentation_link,
      module_id: discipline.module.id,
    },
  });
};
