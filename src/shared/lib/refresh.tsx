import { useLocation, useNavigate } from 'react-router';

export const useRefresh = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return () => navigate(location?.pathname as string);
};
