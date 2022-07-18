import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';
import SideBar from 'components/SideBar';
import { getUsersAdvice } from 'redux/app/auth/auth-operations';
import { authSelectors } from 'redux/app/auth';
import Header from 'components/Header';
import { Section, ContainerBar, ContainerForm } from './CalculatorPage.styled';
import { diaryPerDayOperation, updateDate } from 'redux/app/diaryPerDay';
import MobileSidebar from '../../components/MobileSidebar';

const CalculatorPage = () => {
  const dispatch = useDispatch();
  const currentDate = new Date().toLocaleDateString();
  const userInfo = useSelector(authSelectors.getUserInfo);

  useEffect(() => {
    dispatch(updateDate(currentDate));
    dispatch(diaryPerDayOperation.actionGetProducts({ date: currentDate }));
  }, [currentDate, dispatch]);

  const submitForm = async data => {
    dispatch(getUsersAdvice(data));
  };

  return (
    <>
      <Header localPage="CalculatorPage" />
      <Section>
        <MobileSidebar />

        <ContainerForm>
          <DailyCaloriesForm
            onFormSubmit={submitForm}
            userInfo={userInfo}
            isCleanUserInfo={false}
          />
        </ContainerForm>

        <ContainerBar>
          <SideBar date={currentDate} />
        </ContainerBar>
      </Section>
    </>
  );
};
export default CalculatorPage;
