import { useState } from 'react';
import Modal from 'components/Modal';
import Logo from './components/Logo';

function App() {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <p>SlimMom START TEST!</p>
      <Logo />
      <button //Тимчасова кнопка
        onClick={() => {
          setOpenModal(true);
        }}
      >
        open modal
      </button>
      {!openModal || <Modal closeModalHandle={closeModal} />}
    </div>
  );
}

export default App;
