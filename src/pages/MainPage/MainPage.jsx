import { useState } from 'react';
import { adviceForNoAuthUser } from 'service/axios.config';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';
import Modal from '../../components/Modal';
import { PageWrapper } from './MainPage.styled';
import Background from '../../components/Background';
import Header from '../../components/Header';

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
    <Background>
      <Header localPage="MainPage" />
      <PageWrapper>
        <DailyCaloriesForm onFormSubmit={submitForm} isCleanUserInfo={true} />
        {openModal && (
          <Modal userData={userInfo} closeModalHandle={closeModal} />
        )}
      </PageWrapper>
    </Background>
  );
}
