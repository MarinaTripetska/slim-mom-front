import { useDispatch, useSelector } from 'react-redux';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';
import SideBar from 'components/SideBar';
import { Section } from './CalculatorPage.styled';
import { ContainerBar, ContainerForm } from './CalculatorPage.styled';
import { getUsersAdvice } from 'redux/app/auth/auth-operations';
import { authSelectors } from 'redux/app/auth';
import Header from 'components/Header';
import { getSelectedDate } from 'redux/app/date/dateSlice';

const CalculatorPage = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(authSelectors.getUserInfo);
  const calorie = useSelector(authSelectors.getUserAdviceCalorie);
  const notRecommendProd = useSelector(authSelectors.getUserNotRecommendProd);
  const currentDay = useSelector(getSelectedDate);

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
          <SideBar
            notRecommendProd={notRecommendProd}
            calorie={calorie}
            date={currentDay}
          />
        </ContainerBar>
      </Section>
    </>
  );
};
export default CalculatorPage;
