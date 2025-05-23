import { AsyncSelect } from '@/shared/ui/select';
import { TeachersLoad } from './api/load';
import { Discipline } from '@/shared/api';
import { useSearchParam } from '@/shared/models/search-params';
import { useState } from 'react';
import { Pair } from '@/shared/ui/select/pair';
import { SingleValue } from 'react-select';
import { DEFAULT_VALUE } from './models/default';

export const TeacherParam = ({
  discipline,
}: {
  discipline: Discipline;
}) => {
  const [_, setTeacher] = useSearchParam('teacher_id');
  const [selected, setSelected] =
    useState<SingleValue<Pair<string, string>>>(DEFAULT_VALUE);

  return (
    <fieldset className="sm:w-[300px] w-full">
      <AsyncSelect
        placeholder="Преподаватели"
        cacheOptions
        defaultOptions
        defaultValue={selected}
        value={selected}
        onChange={(e) => {
          setSelected(e);
          setTeacher(e?.value);
        }}
        loadOptions={TeachersLoad(discipline.id)}
      />
    </fieldset>
  );
};
