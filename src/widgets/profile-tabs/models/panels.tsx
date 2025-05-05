import { AdminPanel } from '@/entity/admin';
import { extendedPanels } from '@/entity/super-admin';
import { UserPanel } from '@/entity/user';
import { zip } from '@/shared/lib/array-utils';
import { AdminUpdateList } from '@/widgets/admin-update-list';
import { DisciplineUpdateList } from '@/widgets/discipline-update-list';
import { FavoriteList } from '@/widgets/favorite-list';
import { OurReviewList } from '@/widgets/our-review-list';
import { TeacherUpdateList } from '@/widgets/teacher-update-list';
import { UserUpdateList } from '@/widgets/user-update-list';

const createPanel = (en: object, nodes: React.ReactNode[]) =>
  zip(Object.keys(en), nodes).map((e) => ({
    name: e[0],
    element: e[1],
  }));

const userPanels = createPanel(UserPanel, [
  <FavoriteList />,
  <OurReviewList />,
]);

const adminPanels = createPanel(AdminPanel, [
  <TeacherUpdateList />,
  <DisciplineUpdateList />,
  <UserUpdateList />,
]);

const extendedSuperUserPanels = createPanel(extendedPanels, [
  <AdminUpdateList />,
]);

export const allPanels = [
  ...userPanels,
  ...adminPanels,
  ...extendedSuperUserPanels,
];
