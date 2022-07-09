import { useState } from 'react';
import Modal from 'components/Modal';
// import Loader from './components/Loader';

function App() {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <p>SlimMom START TEST!</p>
      <button //Тимчасова кнопка
        onClick={() => {
          setOpenModal(true);
        }}
      >
        open modal
      </button>
      {!openModal || <Modal closeModalHandle={closeModal} />}
      {/* <Loader /> */}
    </div>
  );
}

export default App;
