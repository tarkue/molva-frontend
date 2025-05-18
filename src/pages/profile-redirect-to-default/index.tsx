import { getPanels } from '@/widgets/profile-tabs';
import { useEffect } from 'react';
import { useNavigate, useParams, Outlet } from 'react-router';

export default function ProfileRedirectToDefault() {
  const panels = getPanels();
  if (!panels) {
    return <></>;
  }
  const { panel } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!panels || panels.length < 1) return;
    if (!panel || !panels.find((e) => e.value == panel)) {
      navigate(`/profile/${panels[0].value}`, { replace: true });
    }
  }, [panel, panels]);

  return <Outlet />;
}
