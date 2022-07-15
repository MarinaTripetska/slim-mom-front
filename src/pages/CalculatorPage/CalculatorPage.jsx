import DailyCaloriesForm from '../../components/DailyCaloriesForm';
//import { PageWrapper } from './CalculatorPage.styled';
import RightSideBar from 'components/RightSideBar';
import { Section } from './CalculatorPage.styled';
import Container from '../../components/Container';
import { ContainerBar } from './CalculatorPage.styled';

const CalculatorPage = () => {
  return (
    <>
      <Section>
        <Container>
          <DailyCaloriesForm />
        </Container>
        <ContainerBar>
          <RightSideBar />
        </ContainerBar>
      </Section>
    </>
  );
};
export default CalculatorPage;
