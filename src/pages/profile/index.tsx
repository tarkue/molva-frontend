import { UserCard, useUser } from '@/entity/user';
import Container from '@/shared/ui/сontainer';
import { ChangePassword } from './ui/change-password';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Spinner } from '@/shared/ui/spinner';
import { ProfileTabsWithPanel } from '@/widgets/profile-tabs';

const ProfilePage = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, []);

  if (!user) return <Spinner />;

  return (
    <Container className="flex flex-col gap-8 py-8">
      <UserCard user={user} actions={<ChangePassword />} />
      <ProfileTabsWithPanel />
    </Container>
  );
};

export default ProfilePage;
