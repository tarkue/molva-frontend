import { useAuth } from '@/entity/user';
import NavigateToAuth from './navigate-to-auth';
import NavigateToNotification from './navigate-to-notification';
import NavigateToProfile from './navigate-to-profile';

const HeaderActions = () => {
  const { isAuthorized } = useAuth();
  const actions = isAuthorized ? (
    <>
      <NavigateToNotification />
      <NavigateToProfile />
    </>
  ) : (
    <NavigateToAuth />
  );

  return <div className="flex items-center gap-2">{actions}</div>;
};

export default HeaderActions;
