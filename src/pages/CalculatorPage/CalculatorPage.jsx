import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/app/auth';
import { getUsersAdvice } from 'redux/app/auth/auth-operations';

import Header from 'components/Header';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';
import RightSideBar from 'components/SideBar';

import { Section, ContainerBar, ContainerForm } from './CalculatorPage.styled';

const CalculatorPage = () => {
  const dispatch = useDispatch();

  const userInfo = useSelector(authSelectors.getUserInfo);
  const calorie = useSelector(authSelectors.getUserAdviceCalorie);
  const notRecommendProd = useSelector(authSelectors.getUserNotRecommendProd);
  const currentDate = new Date().toLocaleDateString();

  const submitForm = async data => {
    dispatch(getUsersAdvice(data));
  };

  return (
    <>
      <Header localPage="CalculatorPage" />
      <Section>
        <ContainerForm>
          <DailyCaloriesForm
            onFormSubmit={submitForm}
            userInfo={userInfo}
            isCleanUserInfo={false}
          />
        </ContainerForm>

        <ContainerBar>
          <RightSideBar
            notRecommendProd={notRecommendProd}
            calorie={calorie}
            date={currentDate}
          />
        </ContainerBar>
      </Section>
    </>
  );
};
export default CalculatorPage;
