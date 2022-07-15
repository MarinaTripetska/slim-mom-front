import { useDispatch, useSelector } from 'react-redux';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';
//import { PageWrapper } from './CalculatorPage.styled';
import RightSideBar from 'components/RightSideBar';
import { Section } from './CalculatorPage.styled';
import Container from '../../components/Container';
import { ContainerBar } from './CalculatorPage.styled';
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
        <Container>
          <DailyCaloriesForm onFormSubmit={submitForm} userInfo={ userInfo} isCleanUserInfo={ false} />
        </Container>
        <ContainerBar>
          <RightSideBar notRecommendProd={ notRecommendProd} calorie={ calorie} />
        </ContainerBar>
      </Section>
    </>
  );
};
export default CalculatorPage;
