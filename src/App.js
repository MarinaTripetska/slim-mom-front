import DiaryPage from './pages/DiaryPage';
import { useState } from 'react';
import Modal from 'components/Modal';
import Header from 'components/Header';
import BurgerMenu from 'components/BurgerMenu';
import DailyCaloriesForm from 'components/DailyCaloriesForm';
import Toaster from 'components/Toasts';
// import Loader from './components/Loader';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

  const BurgerMenuPosition = () => {
  return (
    <div>
      <Header openBurgerMenu={openBurgerMenu} setOpenBurgerMenu={ setOpenBurgerMenu } />
      <BurgerMenu openBurgerMenu={openBurgerMenu} />
    </div>
  )
};

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
      <BurgerMenuPosition />
      <p>SlimMom START TEST!</p>
      <DailyCaloriesForm onBtnClick={submitForm} />
      {!openModal || <Modal closeModalHandle={closeModal} />}
      <DiaryPage /> {/* Обернуть в приватный Route */}
      <Toaster />
    </div>
  );
}

export default App;
