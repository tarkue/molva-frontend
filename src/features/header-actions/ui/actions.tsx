import { useAuth } from '@/entity/user';
import OpenSignIn from './open-signin';
import NavigateToNotification from './navigate-to-notification';
import NavigateToProfile from './navigate-to-profile';
import { ToggleTheme } from './toggle-theme';

const HeaderActions = () => {
  const { isAuthorized } = useAuth();
  const actions = isAuthorized ? (
    <>
      <NavigateToNotification />
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
