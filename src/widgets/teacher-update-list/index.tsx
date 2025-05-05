import { AddTeacher } from '@/features/add-teacher';
import { SearchParam } from '@/features/search-param';

export const TeacherUpdateList = () => {
  return (
    <div className="flex gap-3 w-full">
      <SearchParam placeholder="Найти" />
      <AddTeacher />
    </div>
  );
};
