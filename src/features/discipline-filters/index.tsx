import { FormatPair } from '@/entity/discipline/models/format-pair';
import { Format } from '@/shared/api';
import { useParam } from '@/shared/models/search-params';
import { getValue } from '@/shared/lib/enum-utils';
import Input from '@/shared/ui/input';
import Select from '@/shared/ui/select';
import { DescWithParam } from '../desc-param';

const DisciplineFilters = () => {
  const [disciplineName, setDisciplineName] = useParam<string>('q');
  const [format, setFormat] = useParam<Format>('format');

  return (
    <form className="flex flex-col w-full gap-2">
      <fieldset>
        <Input
          placeholder="Название дисциплины"
          value={disciplineName}
          onChange={(e) => setDisciplineName(e.currentTarget.value)}
        />
      </fieldset>
      <div className="flex w-full justify-between">
        <div className="flex gap-2">
          <fieldset className="w-[250px]">
            <Select placeholder="Наименование модуля" />
          </fieldset>
          <fieldset className="w-[230px]">
            <Select
              placeholder="Формат проведения"
              defaultInputValue={getValue(Format, format)}
              onChange={(e) => setFormat(e?.value as Format)}
              options={FormatPair}
            />
          </fieldset>
        </div>
        <div className="flex gap-2">
          <DescWithParam />
          <fieldset className="w-[200px]">
            <Select placeholder="Сортировать по" />
          </fieldset>
        </div>
      </div>
    </form>
  );
};

export default DisciplineFilters;
