import { useSearchParam } from '@/shared/models/search-params';
import Input from '@/shared/ui/input';

export const SearchParam = () => {
  const [search, setSearch] = useSearchParam<string>('q');
  return (
    <fieldset>
      <Input
        name="q"
        alt="Поисковая строка"
        placeholder="Название дисциплины"
        type="seach"
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
    </fieldset>
  );
};
