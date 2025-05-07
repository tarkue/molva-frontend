import OpenSignIn from './open-signin';
import NavigateToCheckReview from './navigate-to-notification';
import NavigateToProfile from './navigate-to-profile';
import { ToggleTheme } from './toggle-theme';
import { useUser } from '@/entity/user';
import { userHasNotificationWithRole } from '@/entity/user';

const HeaderActions = () => {
  const { isAuthorized, user } = useUser();

  const actions = isAuthorized ? (
    <>
      {userHasNotificationWithRole(user?.role) && (
        <NavigateToCheckReview />
      )}
      <NavigateToProfile />
    </>
  ) : (
    <OpenSignIn />
  );

  return (
    <div className="flex items-center gap-2">
      <ToggleTheme />
      {actions}
    </div>
  );
};

export default HeaderActions;
