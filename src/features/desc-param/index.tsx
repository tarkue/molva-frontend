import { useSearchParam } from '@/shared/models/search-params';
import { Desc } from '@/shared/ui/desc';

export const DescParam = () => {
  const [desc, setDesc] = useSearchParam<0 | 1>('desc', {
    default: 0,
    validator: (el?: string) => {
      if (el === '0' || el === '1') {
        return Number(el) as 0 | 1;
      }
      return 1;
    },
  });

  return <Desc onDescChange={setDesc} value={desc} />;
};
