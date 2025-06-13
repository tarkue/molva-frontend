import { AddAdmin } from '@/features/add-admin';
import { QueryParam } from '@/features/query-param';
import { AdminUpdateListContent } from './ui/content';

export const AdminUpdateList = () => (
  <>
    <div className="flex gap-3 w-full">
      <QueryParam placeholder="Найти администратора" />
      <AddAdmin />
    </div>
    <AdminUpdateListContent />
  </>
);
