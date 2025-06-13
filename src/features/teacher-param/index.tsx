import { Discipline } from '@/shared/api';
import { AsyncSelect } from '@/shared/ui/select';
import { Pair } from '@/shared/ui/select/pair';
import { useState } from 'react';
import { SingleValue } from 'react-select';
import { TeachersLoad } from './api/load';
import { useTeacherParam } from './teacher-param';

export const TeacherParam = ({
  discipline,
}: {
  discipline: Discipline;
}) => {
  const [_, setTeacher] = useTeacherParam();
  const [selected, setSelected] =
    useState<SingleValue<Pair<string, string> | undefined>>();

  return (
    <fieldset className="sm:w-[300px] w-full">
      <AsyncSelect
        placeholder="Преподаватели"
        cacheOptions
        defaultOptions
        isClearable
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
