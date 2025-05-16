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
    <article className="flex w-full sm:items-center gap-3 sm:gap-0 sm:justify-between flex-col sm:flex-row shadow p-6 rounded-2xl bg-base-03">
      <data className="w-full sm:max-w-1/2">
        <p className="text-headline text-contrast truncate">{name}</p>
        <p className="text-subhead text-gray truncate">
          {props.user.email}
        </p>
      </data>
      {props.actions}
    </article>
  );
};
