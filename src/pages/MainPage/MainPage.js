import DailyCaloriesForm from '../../components/DailyCaloriesForm';
import Modal from '../../components/Modal';
import { useState } from 'react';

export default function MainPage() {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };
  const submitForm = () => {
    setOpenModal(true);
  };

  return (
    <>
      <DailyCaloriesForm onBtnClick={submitForm} />
      {!openModal || <Modal closeModalHandle={closeModal} />}
    </>
  );
}
