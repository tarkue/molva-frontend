import { CheckReviewPanelPair } from '@/widgets/check-review-tabs/models/panels';
import { useEffect } from 'react';
import { useNavigate, useParams, Outlet } from 'react-router';

const defaultPanel = CheckReviewPanelPair[0].value;

export default function CheckReviewRedirectToDefault() {
  const { panel } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!panel) {
      navigate(`/check/${defaultPanel}`, { replace: true });
    }
  }, [panel]);

  return <Outlet />;
}
