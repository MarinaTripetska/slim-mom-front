import { useState } from 'react';
import Modal from 'components/Modal';

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
      <p>Lorem ipsum Hello World!</p>
      <div className="test1">Testing</div>
      <div className="test2">Testing bold</div>
    </div>
  );
}

export default App;
