import { Format } from '@/shared/api';
import { enumToPair, getValue } from '@/shared/lib/enum-utils';
import { useSearchParam } from '@/shared/models/search-params';
import { Select } from '@/shared/ui/select';

const FormatPair = enumToPair(Format);

export const FormatParam = () => {
  const [format, setFormat] = useSearchParam<Format>('format');
  return (
    <fieldset className="w-[230px]">
      <Select
        placeholder="Формат проведения"
        defaultInputValue={getValue(Format, format)}
        onChange={(e) => setFormat(e?.value as Format)}
        options={FormatPair}
      />
    </fieldset>
  );
};
