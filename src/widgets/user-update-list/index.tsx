import { SearchParam } from '@/features/search-param';
import { UserUpdateListContent } from './ui/content';

export const UserUpdateList = () => (
  <>
    <SearchParam placeholder="Найти пользователя" />
    <UserUpdateListContent />
  </>
);
