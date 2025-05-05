import { getFullName } from '@/entity/user';
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
      <div className="flex gap-3"></div>
    </div>
  );
};
