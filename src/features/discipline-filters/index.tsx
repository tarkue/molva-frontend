import Button from '@/shared/ui/button';
import Icon from '@/shared/ui/icon';
import Input from '@/shared/ui/input';
import Select from '@/shared/ui/select';

const DisciplineFilters = () => {
  return (
    <form className="flex flex-col w-full gap-2">
      <fieldset>
        <Input placeholder="Название дисциплины" />
      </fieldset>
      <div className="flex w-full justify-between">
        <div className="flex gap-2">
          <fieldset className="w-[250px]">
            <Select placeholder="Наименование модуля" />
          </fieldset>
          <fieldset className="w-[230px]">
            <Select placeholder="Формат проведения" />
          </fieldset>
        </div>
        <div className="flex gap-2">
          <Button variant="circle">
            <Icon glyph="sort-asc" color="gray" />
          </Button>
          <fieldset className="w-[200px]">
            <Select placeholder="Сортировать по" />
          </fieldset>
        </div>
      </div>
    </form>
  );
};

export default DisciplineFilters;
