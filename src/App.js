import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from 'components/Header';
import Loader from './components/Loader';
import LoginPage from 'pages/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';
import MainPage from './pages/MainPage';
import { PrivateRoute } from 'components/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute';
import DiaryPage from 'pages/DiaryPage';

// import DatePicker from './components/DatePicker/';
// import DiaryPage from './pages/DiaryPage';
// import { useSelector } from 'react-redux';

import Toaster from 'components/Toasts';

// import { authOperations } from 'redux/app/auth';
function App() {
  return (
    <>
      <Header />
      {/* <DatePicker /> */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route path="" element={<MainPage />} />
          </Route>

          {/* <Route path="/" element={<PrivateRoute />}> */}
          {/* <Route path="" element={<CalculatorPage />} /> */}
          {/* </Route> */}

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

          <Route path="/calculator" element={<PrivateRoute />}>
            {/* <Route path="" element={<CalculatorPage />} /> */}
          </Route>

          <Route path="/diary" element={<PrivateRoute />}>
            <Route path="" element={<DiaryPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      <Toaster />
    </>
  );
}

export default App;
