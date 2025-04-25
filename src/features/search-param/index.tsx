import { useParam } from '@/shared/models/search-params';
import Input from '@/shared/ui/input';

export const SearchParam = () => {
  const [search, setSearch] = useParam<string>('q');
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
