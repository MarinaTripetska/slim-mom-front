import DiaryDateCalendar from "./DiaryDateCalendar/DiaryDateCalendar";
import DiaryAddProductForm from "./DiaryAddProductForm/DiaryAddProductForm";
import DiaryProductsList from "./DiaryProductsList/DiaryProductsList";
import {PageWrapper} from "./DiaryPageStyle"

export default function DiaryPage() {

  return (
    <PageWrapper>
        <DiaryDateCalendar/>
        <DiaryAddProductForm/>
        <DiaryProductsList/>
    </PageWrapper>
  );
}