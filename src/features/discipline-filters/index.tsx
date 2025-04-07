import { useParam } from '@/shared/hooks/search-params';
import Button from '@/shared/ui/button';
import Icon from '@/shared/ui/icon';
import Input from '@/shared/ui/input';
import Select from '@/shared/ui/select';

enum Format {
  offline = 'Оффлайн',
  online = 'Онлайн',
  mixed = 'Смешанный',
}

interface Pair {
  value: string;
  label: string;
}

function zip<K, T>(a: Array<K>, b: Array<T>) {
  return a.map((k, i) => [k, b[i]]);
}

function enumToValueLabel<T extends object>(obj: T): Pair[] {
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  return zip(keys, values).map((el) => ({
    value: el[0],
    label: el[1],
  }));
}

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
              defaultInputValue={
                Format[format as unknown as keyof typeof Format]
              }
              onChange={(e) => setFormat((e as Pair).value as Format)}
              options={enumToValueLabel(Format)}
            />
          </fieldset>
        </div>
        <div className="flex gap-2">
          <Button variant="circle">
            <Icon glyph="sort-asc" stroke="gray" />
          </Button>
          <fieldset className="w-[200px]">
            <Select placeholder="Сортировать по" />
          </fieldset>
        </div>
      </div>
    </form>
  );
};

export default DisciplineFilters;
