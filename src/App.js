import DiaryPage from './pages/DiaryPage';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import Modal from 'components/Modal';
import Header from 'components/Header';
import DailyCaloriesForm from 'components/DailyCaloriesForm';
import Toaster from 'components/Toasts';
import Loader from './components/Loader';

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
      <DailyCaloriesForm onBtnClick={submitForm} />
      {!openModal || <Modal closeModalHandle={closeModal} />}
      <DiaryPage /> {/* Обернуть в приватный Route */}
      {!isLoaderShown || <Loader />}
      <Toaster />
    </div>
  );
}

export default App;
