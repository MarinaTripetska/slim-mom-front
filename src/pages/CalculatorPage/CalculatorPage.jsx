import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MobileNavigationPanel from 'components/MobileNavigationPanel';
import DailyCaloriesForm from 'components/DailyCaloriesForm';
import SideBar from 'components/SideBar';
import Header from 'components/Header';

import { getUsersAdvice } from 'redux/app/auth/auth-operations';
import { authSelectors } from 'redux/app/auth';
import { diaryPerDayOperation, updateDate } from 'redux/app/diaryPerDay';
import useViewportDimensions from 'hooks/useViewportDimensions';

import { Section, ContainerBar, ContainerForm } from './CalculatorPage.styled';

const CalculatorPage = () => {
  const dispatch = useDispatch();
  const currentDate = new Date().toLocaleDateString('ru-RU');
  const userInfo = useSelector(authSelectors.getUserInfo);
  const viewportDim = useViewportDimensions;
  const isMobileWidth = viewportDim.width <= 767;

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
        {isMobileWidth && <MobileNavigationPanel />}

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
