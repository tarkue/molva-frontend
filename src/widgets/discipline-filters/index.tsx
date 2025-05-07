import { OrderParam } from '@/features/order-param';
import { FormatParam } from '@/features/format-param';
import { ModuleParam } from '@/features/module-param';
import { SearchParam } from '@/features/search-param';
import { SortParam } from '@/features/sort-param';
import { AddDiscipline } from '@/features/add-discipline';
import { canCreateDiscipline, useUser } from '@/entity/user';

const DisciplineFilters = () => {
  const { user } = useUser();

  return (
    <form className="flex flex-col w-full gap-2">
      <div className="flex w-full justify-between gap-3">
        <SearchParam placeholder="Название дисциплины" />
        {canCreateDiscipline(user?.role) && <AddDiscipline />}
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
  );
};

export default DisciplineFilters;
