import { OnlyUserName, getFullName } from '../libs/name';

interface UserUpdateCardProps {
  user: OnlyUserName;
  actions?: React.ReactNode;
}
export const UserUpdateCard = ({
  user,
  actions,
}: UserUpdateCardProps) => {
  const name = getFullName(user);
  return (
    <div className="flex justify-between gap-4 w-full">
      <span className="text-headline text-contrast w-full truncate">
        {name}
      </span>
      <div className="flex gap-3">{actions}</div>
    </div>
  );
};
