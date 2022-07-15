import { useDispatch, useSelector } from 'react-redux';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';
import RightSideBar from 'components/RightSideBar';
import { Section } from './CalculatorPage.styled';
import { ContainerBar, ContainerForm } from './CalculatorPage.styled';
import { getUsersAdvice } from 'redux/app/auth/auth-operations';
import { authSelectors } from 'redux/app/auth';

const CalculatorPage = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(authSelectors.getUserInfo);
  const calorie = useSelector(authSelectors.getUserAdviceCalorie);
  const notRecommendProd = useSelector(authSelectors.getUserNotRecommendProd);

  const submitForm = async data => {
    dispatch(getUsersAdvice(data));
  };

  return (
    <>
      <Section>
        <ContainerForm>
          <DailyCaloriesForm
            onFormSubmit={submitForm}
            userInfo={userInfo}
            isCleanUserInfo={false}
          />
        </ContainerForm>

        <ContainerBar>
          <RightSideBar notRecommendProd={notRecommendProd} calorie={calorie} />
        </ContainerBar>
      </Section>
    </>
  );
};
export default CalculatorPage;
