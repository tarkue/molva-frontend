import { AdminPanel } from '@/entity/admin';
import { extendedPanels } from '@/entity/super-admin';
import { UserPanel } from '@/entity/user';
import { createPanelList } from '@/shared/lib/panel';
import { AdminUpdateList } from '@/widgets/admin-update-list';
import { DisciplineUpdateList } from '@/widgets/discipline-update-list';
import { FavoriteList } from '@/widgets/favorite-list';
import { OurReviewList } from '@/widgets/our-review-list';
import { TeacherUpdateList } from '@/widgets/teacher-update-list';
import { UserUpdateList } from '@/widgets/user-update-list';

const userPanels = createPanelList(UserPanel, [
  <FavoriteList />,
  <OurReviewList />,
]);

const adminPanels = createPanelList(AdminPanel, [
  <TeacherUpdateList />,
  <DisciplineUpdateList />,
  <UserUpdateList />,
]);

const extendedSuperUserPanels = createPanelList(extendedPanels, [
  <AdminUpdateList />,
]);

export const allPanels = [
  ...userPanels,
  ...adminPanels,
  ...extendedSuperUserPanels,
];
