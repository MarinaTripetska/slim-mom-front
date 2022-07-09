import DiaryDateCalendar from "../../components/DiaryDateCalendar";
import DiaryAddProductForm from "../../components/DiaryAddProductForm";
import DiaryProductsList from "../../components/DiaryProductsList";
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