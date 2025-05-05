import { DescParam } from '@/features/desc-param';
import { FormatParam } from '@/features/format-param';
import { ModuleParam } from '@/features/module-param';
import { SearchParam } from '@/features/search-param';
import { SortParam } from '@/features/sort-param';
import { DisciplineUpdateListContent } from './ui/content';

export const DisciplineUpdateList = () => (
  <>
    <form className="flex flex-col w-full gap-2">
      <SearchParam placeholder="Название дисциплины" />
      <div className="flex w-full justify-between">
        <div className="flex gap-2">
          <ModuleParam />
          <FormatParam />
        </div>
        <div className="flex gap-2">
          <DescParam />
          <SortParam />
        </div>
      </div>
    </form>
    <DisciplineUpdateListContent />
  </>
);
