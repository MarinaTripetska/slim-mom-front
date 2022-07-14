import DailyCaloriesForm from '../../components/DailyCaloriesForm';
import { PageWrapper } from './CalculatorPage.styled';
import RightSideBar from 'components/RightSideBar';
import { Section } from './CalculatorPage.styled';

const CalculatorPage = () => {
  return (
    <>
      <Section>
        <DailyCaloriesForm />
        <RightSideBar />
      </Section>
    </>
  );
};
export default CalculatorPage;
