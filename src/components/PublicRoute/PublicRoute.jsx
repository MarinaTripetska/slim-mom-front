import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/app/auth';

export const PublicRoute = ({ restricted = false }) => {
  const diaryPage = '/diary';
  const calcPage = '/calculator';
  const isUserInfo = useSelector(authSelectors.getUserInfo);

  const navigateTo = isUserInfo ? diaryPage : calcPage;

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={navigateTo} /> : <Outlet />;
};
