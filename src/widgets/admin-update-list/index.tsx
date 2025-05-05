import { SearchParam } from '@/features/search-param';
import { AdminUpdateListContent } from './ui/content';

export const AdminUpdateList = () => (
  <>
    <div className="flex gap-3 w-full">
      <SearchParam placeholder="Найти администратора" />
    </div>
    <AdminUpdateListContent />
  </>
);
