import DailyCaloriesForm from '../../components/DailyCaloriesForm';
import Modal from '../../components/Modal';

export default function MainPage({ submitForm, closeModal, isOpenModal }) {
  return (
    <>
      <DailyCaloriesForm onBtnClick={submitForm} />
      {!isOpenModal || <Modal closeModalHandle={closeModal} />}
    </>
  );
}
