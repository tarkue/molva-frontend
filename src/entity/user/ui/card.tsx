import { useMemo } from 'react';
import { User } from '@/shared/api';
import { getFullName } from '../libs/name';

interface UserCardProps {
  user: User;
  actions: React.ReactNode;
}

export const UserCard = (props: UserCardProps) => {
  const name = useMemo(
    () => getFullName(props.user),
    [
      props.user.first_name,
      props.user.surname,
      props.user.patronymic,
    ],
  );

  return (
    <article className="flex w-full items-center justify-between shadow p-6 rounded-2xl bg-base-03">
      <data>
        <p className="text-headline text-contrast">{name}</p>
        <p className="text-subhead text-gray">{props.user.email}</p>
      </data>
      {props.actions}
    </article>
  );
};
