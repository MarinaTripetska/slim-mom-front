import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from 'components/Header';
import Loader from './components/Loader';

// import DiaryPage from './pages/DiaryPage';
// import { useState } from 'react';
// import { useSelector } from 'react-redux';
import { PublicRoute } from 'components/PublicRoute';
//import MainPage from 'pages/MainPaige/MainPage';
//import LoginPage from 'pages/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';
import { PrivateRoute } from 'components/PrivateRoute';
// import Modal from 'components/Modal';

// import DailyCaloriesForm from 'components/DailyCaloriesForm';
// import Toaster from 'components/Toasts';

// import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
// import LoginForm from 'components/LoginForm';
// import { authOperations } from 'redux/app/auth';

// import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
// import LoginForm from 'components/LoginForm';
// import { authOperations } from 'redux/app/auth';

//  const isLoaderShown = useSelector(state => state.loader.isShown);

function App() {
  // const [openModal, setOpenModal] = useState(false);
  // const isLoaderShown = useSelector(state => state.loader.isShown);
  // const closeModal = () => {
  //   setOpenModal(false);
  // };
  // const submitForm = () => {
  //   setOpenModal(true);
  // };

  //   useEffect(() => {
  //   dispatch(authOperations.fetchCurrentUser());
  // }, [dispatch]);

  return (
    <>
      {/* <Header /> */}

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route path="" element={<RegistrationPage />} />
          </Route>

          <Route path="/" element={<PrivateRoute />}>
            {/* <Route path="" element={<DiaryPage />} /> */}
          </Route>

          <Route
            path="/register"
            element={<PublicRoute restricted navigateTo="/diary" />}
          >
            {/* <Route path="" element={<RegistrationPage />} /> */}
          </Route>

          <Route
            path="/login"
            element={<PublicRoute restricted navigateTo="/diary" />}
          >
            {/* <Route path="" element={<LoginPage />} /> */}
          </Route>

          <Route path="/calculator" element={<PrivateRoute />}>
            {/* <Route path="" element={<CalculatorPage />} /> */}
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>

    // <div>
    //   <Header />
    //   <p>SlimMom START TEST!</p>
    //   <DailyCaloriesForm onBtnClick={submitForm} />
    //   {!openModal || <Modal closeModalHandle={closeModal} />}
    //   <RegistrationForm onBtnClick={submitForm} />
    //   <LoginForm />
    //   <DiaryPage /> {/* Обернуть в приватный Route */}
    //   <Toaster />
    //   {!isLoaderShown || <Loader />}
    // </div>
  );
}

export default App;
