import { QueryParam } from '@/features/query-param';
import { UserUpdateListContent } from './ui/content';

export const UserUpdateList = () => (
  <>
    <QueryParam placeholder="Найти пользователя" />
    <UserUpdateListContent />
  </>
);
