import { useState } from 'react';
import Modal from 'components/Modal';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import DailyCaloriesForm from 'components/DailyCaloriesForm';
import Toaster from 'components/Toasts';
// import Loader from './components/Loader';


function App() {
  const [openModal, setOpenModal] = useState(false);

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
      <Navigation />
      <p>SlimMom START TEST!</p>
      <DailyCaloriesForm onBtnClick={submitForm} />

      {!openModal || <Modal closeModalHandle={closeModal} />}
      <Toaster />
      {/* <Loader /> */}
    </div>
  );
}

export default App;
