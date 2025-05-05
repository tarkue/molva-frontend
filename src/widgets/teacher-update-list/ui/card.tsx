import { UserUpdateCard } from '@/entity/user';
import { DeleteTeacher } from '@/features/delete-teacher';
import { EditTeacher } from '@/features/update-teacher';
import { Teacher } from '@/shared/api';

interface TeacherUpdateCardProps {
  teacher: Teacher;
}
export const TeacherUpdateCard = ({
  teacher,
}: TeacherUpdateCardProps) => {
  const actions = (
    <>
      <EditTeacher teacher={teacher} />
      <DeleteTeacher teacher={teacher} />
    </>
  );
  return <UserUpdateCard user={teacher} actions={actions} />;
};
