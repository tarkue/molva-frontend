import { SearchParam } from '@/features/search-param';
import { AdminUpdateListContent } from './ui/content';
import { AddAdmin } from '@/features/add-admin';

export const AdminUpdateList = () => (
  <>
    <div className="flex gap-3 w-full">
      <SearchParam placeholder="Найти администратора" />
      <AddAdmin />
    </div>
    <AdminUpdateListContent />
  </>
);
