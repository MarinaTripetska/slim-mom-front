import { useState } from 'react';
import { adviceForNoAuthUser } from 'service/axios.config';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';
import Modal from '../../components/Modal';
import { PageWrapper } from './MainPage.styled';

export default function MainPage() {
  const [userInfo, setUserInfo] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  const submitForm = async data => {
    const resp = await adviceForNoAuthUser(data);

    if (resp.code === 200) {
      setUserInfo(resp.data.nutritionAdvice);
      setOpenModal(true);
    }
  };

  return (
    <PageWrapper>
      <DailyCaloriesForm onFormSubmit={submitForm} />
      {openModal && <Modal userData={userInfo} closeModalHandle={closeModal} />}
    </PageWrapper>
  );
}
