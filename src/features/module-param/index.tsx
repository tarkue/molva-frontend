import { AsyncSelect } from '@/shared/ui/select';

export const ModuleParam = () => {
  return (
    <fieldset className="w-full lg:w-[250px]">
      <AsyncSelect placeholder="Наименование модуля" />
    </fieldset>
  );
};
