import { AsyncSelect } from '@/shared/ui/select';
import { loadModules } from './api/load';
import { useSearchParam } from '@/shared/models/search-params';
import { useState } from 'react';
import { Pair } from '@/shared/ui/select/pair';

export const ModuleParam = () => {
  const [selected, setSelected] = useState<Pair<string, string>>();
  const [module, setModule] = useSearchParam<string>('module');
  return (
    <fieldset className="w-full lg:w-[250px]">
      <AsyncSelect
        placeholder="Наименование модуля"
        aria-label="Выберите наименование модуля"
        defaultOptions
        isClearable={false}
        cacheOptions
        defaultValue={
          module ? { label: module, value: module } : undefined
        }
        loadOptions={loadModules}
        value={selected}
        onChange={(e) => {
          if (!e) {
            setSelected(undefined);
            setModule(undefined);
          } else {
            setSelected(e);
            setModule(e.label);
          }
        }}
      />
    </fieldset>
  );
};
