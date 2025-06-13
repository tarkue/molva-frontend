import { getPanels } from '@/widgets/profile-tabs';
import { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router';

export default function ProfileRedirectToDefault() {
  const panels = getPanels();
  const { panel } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (panels && panels.length > 0) {
      const isValidPanel = panels.some((p) => p.value === panel);

      if (!panel || !isValidPanel) {
        navigate(`/profile/${panels[0].value}`, { replace: true });
      }
    }
  }, [panels, navigate, panel]);

  return <Outlet />;
}
