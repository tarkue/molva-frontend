import { useSearchParam } from '@/shared/models/search-params';
import Input from '@/shared/ui/input';

export const SearchParam = ({
  placeholder,
}: {
  placeholder?: string;
}) => {
  const [search, setSearch] = useSearchParam<string>('q');

  return (
    <fieldset className="w-full">
      <Input
        name="q"
        alt="Поисковая строка"
        placeholder={placeholder}
        aria-label="Поисковая строка"
        type="seach"
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
    </fieldset>
  );
};
