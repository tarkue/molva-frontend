import { getFullName } from '@/entity/user';
import { DeleteTeacher } from '@/features/delete-teacher';
import { EditTeacher } from '@/features/edit-teacher';
import { Teacher } from '@/shared/api';

interface TeacherUpdateCardProps {
  teacher: Teacher;
}
export const TeacherUpdateCard = ({
  teacher,
}: TeacherUpdateCardProps) => {
  const name = getFullName(teacher);
  return (
    <div className="flex justify-between gap-4 w-full">
      <span className="text-headline text-contrast w-full">
        {name}
      </span>
      <div className="flex gap-3">
        <EditTeacher teacher={teacher} />
        <DeleteTeacher teacher={teacher} />
      </div>
    </div>
  );
};
