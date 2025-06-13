import { AddTeacher } from '@/features/add-teacher';
import { QueryParam } from '@/features/query-param';
import { TeacherUpdateListContent } from './ui/content';

export const TeacherUpdateList = () => {
  return (
    <>
      <div className="flex gap-3 w-full">
        <QueryParam placeholder="Найти преподавателя" />
        <AddTeacher />
      </div>
      <TeacherUpdateListContent />
    </>
  );
};
