import { Format } from '@/shared/api';
import { enumToPair } from '@/shared/lib/enum-utils';
import { useSearchParam } from '@/shared/models/search-params';
import { Select } from '@/shared/ui/select';

const FormatPair = enumToPair(Format);

export const FormatParam = () => {
  const [format, setFormat] = useSearchParam<Format>('format');
  return (
    <fieldset className="w-full lg:w-[230px]">
      <Select
        placeholder="Формат проведения"
        aria-label="Выберите формат проведения"
        defaultInputValue={format}
        onChange={(e) => setFormat(e?.label as Format)}
        options={FormatPair}
      />
    </fieldset>
  );
};
