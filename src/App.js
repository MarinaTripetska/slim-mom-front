import { useState } from 'react';
import Modal from 'components/Modal';
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
      <p>SlimMom START TEST!</p>
      <DailyCaloriesForm onBtnClick={submitForm} />

      {!openModal || <Modal closeModalHandle={closeModal} />}
      <Toaster />
      {/* <Loader /> */}
    </div>
  );
}

export default App;
