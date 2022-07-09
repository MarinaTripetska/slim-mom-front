import DiaryDateCalendar from "./DiaryDateCalendar";
import DiaryAddProductForm from "./DiaryAddProductForm";
import DiaryProductsList from "./DiaryProductsList";
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