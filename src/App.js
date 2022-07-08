import { useState } from 'react';
import Modal from 'components/Modal';
import DailyCaloriesForm from 'components/DailyCaloriesForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
