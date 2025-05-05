import Container from '@/shared/ui/сontainer';
import DisciplineList from '@/widgets/discipline-list';
import { DescParam } from '@/features/desc-param';
import { FormatParam } from '@/features/format-param';
import { ModuleParam } from '@/features/module-param';
import { SearchParam } from '@/features/search-param';
import { SortParam } from '@/features/sort-param';

const MainPage = () => {
  return (
    <Container className="flex flex-col gap-8 pt-8 pb-8">
      <div className="flex flex-col gap-3">
        <h1 className="text-hero uppercase text-center">Молва</h1>
        <p className="text-h1 text-center">
          Твой навигатор в мире ИОТ
        </p>
      </div>
      <article className="flex flex-col gap-6">
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
        <DisciplineList />
      </article>
    </Container>
  );
};

export default MainPage;
