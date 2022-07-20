import { BsPlusLg } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { diarySelectors } from 'redux/app/diaryPerDay';
import DiaryDateCalendar from 'components/DiaryDateCalendar';
import DiaryAddProductForm from '../../components/DiaryAddProductForm';
import DiaryProductsList from '../../components/DiaryProductsList';
import MobileSidebar from '../../components/MobileSidebar';
import {
  AddBtnMobile,
  PageWrap,
  SidebarWrap,
  ListWrap,
  ContainerDiary,
  ProductsNotice,
} from './DiaryPageStyle';
import SideBar from 'components/SideBar';
import { diaryPerDayOperation } from 'redux/app/diaryPerDay';
import Header from 'components/Header';

export default function DiaryPage() {
  const currentDate = new Date().toLocaleDateString();
  const [mobileAddSelected, setMobileAddSelected] = useState(false);

  const dispatch = useDispatch();
  const date = useSelector(diarySelectors.getCurrentDate);

  useEffect(() => {
    console.log(currentDate);
    dispatch(
      diaryPerDayOperation.actionGetProducts({ date: currentDate }),
    ).then(res => {
      if (typeof res.payload === 'string') {
        dispatch(
          diaryPerDayOperation.actionCreateProductsList({ date: currentDate }),
        );
      }
    });
  }, [currentDate, dispatch]);

  const formSubmitHandler = data => {
    const { product, weight } = data;

    dispatch(
      diaryPerDayOperation.actionAddProduct({
        date: currentDate,
        data: { product: product, weightGrm: weight },
      }),
    ).then(res => console.log(res));

    setMobileAddSelected(false);
  };

  return (
    <>
      <Header localPage="DiaryPage" />
      <PageWrap>
        <MobileSidebar onGoBack={() => setMobileAddSelected(false)} />

        <ContainerDiary>
          {!mobileAddSelected && <DiaryDateCalendar />}

          {date === currentDate ? (
            <DiaryAddProductForm
              onSubmit={formSubmitHandler}
              className={mobileAddSelected ? '' : 'hideOnMobile'}
            />
          ) : (
            <ProductsNotice>Продукти якi ви з'їли в цей день</ProductsNotice>
          )}
          <ListWrap className={mobileAddSelected ? 'hideOnMobile' : ''}>
            {<DiaryProductsList />}
          </ListWrap>
          {!mobileAddSelected && (
            <AddBtnMobile
              className={'showOnMobile'}
              onClick={() => setMobileAddSelected(true)}
            >
              <BsPlusLg size={14} />
            </AddBtnMobile>
          )}
        </ContainerDiary>
        <SidebarWrap className={mobileAddSelected ? 'hideOnMobile' : ''}>
          <SideBar date={currentDate} />
        </SidebarWrap>
      </PageWrap>
    </>
  );
}
