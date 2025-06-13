import { Format } from '@/shared/api';
import { enumToPair } from '@/shared/lib/enum-utils';
import { Select } from '@/shared/ui/select';
import { useFormatParam } from './format-param';

const FormatPair = enumToPair(Format);

const FormatParam = () => {
  const [format, setFormat] = useFormatParam();
  return (
    <fieldset className="w-full lg:w-[230px]">
      <Select
        placeholder="Формат проведения"
        isClearable={true}
        aria-label="Выберите формат проведения"
        defaultInputValue={format}
        onChange={(e) => setFormat(e?.label as Format)}
        options={FormatPair}
      />
    </fieldset>
  );
};

export { FormatParam, useFormatParam };
