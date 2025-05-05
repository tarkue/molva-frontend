import { Spinner } from '@/shared/ui/spinner';
import { getPanels } from '@/widgets/profile-tabs';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const RedirectToProfileWithParam = () => {
  const panels = getPanels();
  const navigate = useNavigate();

  useEffect(() => {
    if (panels) {
      if (panels.length == 0) {
        navigate('/');
      } else {
        navigate(`/profile/${panels[0].value}`);
      }
    }
  }, [panels]);

  return <Spinner />;
};
