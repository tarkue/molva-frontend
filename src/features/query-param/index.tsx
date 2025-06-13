import Input from '@/shared/ui/input';
import { useQueryParam } from './query-param';

const QueryParam = ({ placeholder }: { placeholder?: string }) => {
  const [query, setQuery] = useQueryParam();

  return (
    <fieldset className="w-full">
      <Input
        name="q"
        alt="Поисковая строка"
        placeholder={placeholder}
        aria-label="Поисковая строка"
        type="seach"
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
      />
    </fieldset>
  );
};

export { QueryParam, useQueryParam };
