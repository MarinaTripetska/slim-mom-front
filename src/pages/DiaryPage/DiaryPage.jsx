import DiaryDateCalendar from '../../components/DiaryDateCalendar';
import DiaryAddProductForm from '../../components/DiaryAddProductForm';
import DiaryProductsList from '../../components/DiaryProductsList';
import { PageWrapper } from './DiaryPageStyle';
import RightSideBar from 'components/RightSideBar';
import Container from '../../components/Container';

export default function DiaryPage() {
  return (
    <PageWrapper>
      <Container>
        <DiaryDateCalendar />
        <DiaryAddProductForm />
        <DiaryProductsList />
        <RightSideBar />
      </Container>
    </PageWrapper>
  );
}
