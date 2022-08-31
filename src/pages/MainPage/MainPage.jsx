import { useState } from 'react';

import { adviceForNoAuthUser } from 'service/axios.config';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';
import Modal from '../../components/Modal';
import Background from '../../components/Background';
import Header from '../../components/Header';
import Loader from 'components/Loader';

import { PageWrapper } from './MainPage.styled';

export default function MainPage() {
  const [userInfo, setUserInfo] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
    setIsLoading(false);
  };

  const submitForm = async data => {
    setIsLoading(true);
    const resp = await adviceForNoAuthUser(data);

    if (resp.code === 200) {
      setUserInfo(resp.data.nutritionAdvice);
      setOpenModal(true);
      setIsLoading(false);
    }
  };

  return (
    <Background>
      <Header localPage="MainPage" />

      <PageWrapper>
        <DailyCaloriesForm
          onFormSubmit={submitForm}
          isCleanUserInfo={true}
          isShowNoti={false}
        />
        {isLoading && <Loader />}
        {openModal && (
          <Modal userData={userInfo} closeModalHandle={closeModal} />
        )}
      </PageWrapper>
    </Background>
  );
}
