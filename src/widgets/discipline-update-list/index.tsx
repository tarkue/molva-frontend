import { OrderParam } from '@/features/order-param';
import { FormatParam } from '@/features/format-param';
import { ModuleParam } from '@/features/module-param';
import { SearchParam } from '@/features/search-param';
import { SortParam } from '@/features/sort-param';
import { DisciplineUpdateListContent } from './ui/content';
import { AddDiscipline } from '@/features/add-discipline';

export const DisciplineUpdateList = () => (
  <>
    <form className="flex flex-col w-full gap-2">
      <div className="flex w-full justify-between">
        <SearchParam placeholder="Название дисциплины" />
        <AddDiscipline />
      </div>
      <div className="flex w-full justify-between">
        <div className="flex gap-2">
          <ModuleParam />
          <FormatParam />
        </div>
        <div className="flex gap-2">
          <OrderParam />
          <SortParam />
        </div>
      </div>
    </form>
    <DisciplineUpdateListContent />
  </>
);
