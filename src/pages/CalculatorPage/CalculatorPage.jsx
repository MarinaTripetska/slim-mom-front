import DailyCaloriesForm from '../../components/DailyCaloriesForm';
import RightSideBar from 'components/RightSideBar';
import { Section } from './CalculatorPage.styled';
import { ContainerBar, ContainerForm } from './CalculatorPage.styled';

const CalculatorPage = () => {
  return (
    <>
      <Section>
        <ContainerForm>
          <DailyCaloriesForm />
        </ContainerForm>
        <ContainerBar>
          <RightSideBar />
        </ContainerBar>
      </Section>
    </>
  );
};
export default CalculatorPage;
