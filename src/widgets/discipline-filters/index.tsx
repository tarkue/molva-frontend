import { canCreateDiscipline, useUser } from '@/entity/user';
import { AddDiscipline } from '@/features/add-discipline';
import { FormatParam } from '@/features/format-param';
import { ModuleParam } from '@/features/module-param';
import { OrderParam } from '@/features/order-param';
import { QueryParam } from '@/features/query-param';
import { SortParam } from '@/features/sort-param';

const DisciplineFilters = () => {
  const { user } = useUser();

  return (
    <form className="flex flex-col w-full gap-2">
      <div className="flex w-full justify-between gap-3">
        <QueryParam placeholder="Название дисциплины" />
        {canCreateDiscipline(user?.role) && <AddDiscipline />}
      </div>
      <div className="flex w-full justify-between flex-col lg:flex-row gap-3 lg:gap-0">
        <div className="flex flex-col gap-3 lg:gap-2 lg:flex-row">
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
