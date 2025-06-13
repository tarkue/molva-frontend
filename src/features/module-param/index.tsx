import { AsyncSelect } from '@/shared/ui/select';
import { Pair } from '@/shared/ui/select/pair';
import { useState } from 'react';
import { loadModules } from './api/load';
import { useModuleParam } from './module-param';

const ModuleParam = () => {
  const [selected, setSelected] = useState<Pair<string, string>>();
  const [module, setModule] = useModuleParam();
  return (
    <fieldset className="w-full lg:w-[250px]">
      <AsyncSelect
        placeholder="Наименование модуля"
        aria-label="Выберите наименование модуля"
        defaultOptions
        isClearable={true}
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

export { ModuleParam, useModuleParam };
