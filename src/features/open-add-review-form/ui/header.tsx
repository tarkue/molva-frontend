import { Discipline } from '@/shared/api';

export const FormHeader = (props: { discipline: Discipline }) => (
  <fieldset className="flex flex-col gap-1">
    <label className="text-body text-gray">
      {props.discipline.module.name}
    </label>
    <label className="text-body text-gray">
      Формат: {props.discipline.format}
    </label>
  </fieldset>
);
