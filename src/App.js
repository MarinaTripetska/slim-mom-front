import { useState } from 'react';
import Modal from 'components/Modal';
import Header from 'components/Header';
import Navigation from 'components/Navigation';

function App() {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Header />
      <Navigation />
      <p>SlimMom START TEST!</p>
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
