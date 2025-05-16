import { FormField } from '@/shared/ui/form';
import { AsyncSelect } from '@/shared/ui/select';
import { Pair } from '@/shared/ui/select/pair';
import { useState } from 'react';
import { loadUsers } from '../api/load';

export const AddAdminFormFields = () => {
  const [selected, setSelected] = useState<Pair<string, string>>();
  return (
    <>
      <FormField
        name="id"
        render={({ field }) => (
          <AsyncSelect
            placeholder="Пользователь"
            cacheOptions
            defaultOptions
            loadOptions={loadUsers}
            aria-label="Выберите пользователя"
            {...field}
            value={selected}
            name={field.name}
            isClearable
            onChange={(e) => {
              if (!e) return;
              field.onChange(e.value);
              setSelected(e);
            }}
          />
        )}
      ></FormField>
    </>
  );
};
