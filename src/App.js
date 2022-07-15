import { Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from 'components/Header';
import Loader from './components/Loader';
import LoginPage from 'pages/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';
import MainPage from './pages/MainPage';
import { PrivateRoute } from 'components/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute';
import DiaryPage from 'pages/DiaryPage';
import CalculatorPage from 'pages/CalculatorPage';
import Toaster from 'components/Toasts';
import { useDispatch, useSelector } from 'react-redux';
import { actionCurrent } from 'redux/app/auth/auth-operations';
import { authSelectors } from 'redux/app/auth';

function App() {
  const isFetchingUser = useSelector(authSelectors.getIsFetchingUser);
  const dispatch = useDispatch();
  const token = localStorage.getItem('AUTH_TOKEN');

  useEffect(() => {
    if (token) {
      dispatch(actionCurrent());
    }
  }, [dispatch, token]);

  return (
    <>
      {!isFetchingUser && (
        <>
          <Header />

          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path="/"
                element={<PublicRoute restricted navigateTo="/diary" />}
              >
                <Route path="" element={<MainPage />} />
              </Route>

              <Route
                path="/register"
                element={<PublicRoute restricted navigateTo="/diary" />}
              >
                <Route path="" element={<RegistrationPage />} />
              </Route>

              <Route
                path="/login"
                element={<PublicRoute restricted navigateTo="/diary" />}
              >
                <Route path="" element={<LoginPage />} />
              </Route>

              {/* <Route path="/calculator" element={<PrivateRoute />}> */}
              <Route path="/calculator" element={<PublicRoute />}>
                <Route path="" element={<CalculatorPage />} />
              </Route>

              <Route path="/diary" element={<PrivateRoute />}>
                <Route path="" element={<DiaryPage />} />
              </Route>

              <Route path="*" element={<Navigate to="/diary" />} />
            </Routes>
          </Suspense>
          <Toaster />
        </>
      )}
    </>
  );
}

export default App;
