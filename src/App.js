import { useState } from 'react';
import { useSelector } from 'react-redux';
import DiaryPage from './pages/DiaryPage';
import MainPage from 'pages/MainPage';

import Modal from 'components/Modal';
import Header from 'components/Header';
import DailyCaloriesForm from 'components/DailyCaloriesForm';
import Toaster from 'components/Toasts';
import Loader from './components/Loader';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import LoginForm from 'components/LoginForm';

function App() {
  const [openModal, setOpenModal] = useState(false);

  const isLoaderShown = useSelector(state => state.loader.isShown);

  const closeModal = () => {
    //...
    setOpenModal(false);
  };

  const submitForm = () => {
    //...
    setOpenModal(true);
  };

  return (
    <div>
      <Header />
      <p>SlimMom START TEST!</p>
      <MainPage
        submitForm={submitForm}
        closeModal={closeModal}
        isOpenModal={openModal}
      />{' '}
      {/* Публічний Route */}
      <RegistrationForm onBtnClick={submitForm} />
      <LoginForm />
      <DiaryPage /> {/* Обернуть в приватный Route */}
      <Toaster />
      {!isLoaderShown || <Loader />}
    </div>
  );
}

export default App;
