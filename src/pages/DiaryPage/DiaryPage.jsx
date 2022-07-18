import { BsPlusLg } from 'react-icons/bs';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
} from './DiaryPageStyle';
import SideBar from 'components/SideBar';
import { diaryPerDayOperation, diarySelectors } from 'redux/app/diaryPerDay';
import Header from 'components/Header';
import { useEffect } from 'react';

export default function DiaryPage() {
  const currentDate = useSelector(diarySelectors.getCurrentDate);
  const [mobileAddSelected, setMobileAddSelected] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      diaryPerDayOperation.actionGetProducts({ date: currentDate }),
    ).then(res => {
      if (typeof res.payload === 'string') {
        dispatch(
          diaryPerDayOperation.actionCreateProductsList({ date: currentDate }),
        ).then(res => console.log(res));
      }
    });
  }, []);

  const formSubmitHandler = data => {
    setMobileAddSelected(false);
  };

  return (
    <>
      <Header localPage="DiaryPage" />
      <PageWrap>
        <MobileSidebar onGoBack={() => setMobileAddSelected(false)} />

        <ContainerDiary>
          {!mobileAddSelected && <DiaryDateCalendar />}
          <DiaryAddProductForm
            onSubmit={formSubmitHandler}
            className={mobileAddSelected ? '' : 'hideOnMobile'}
          />

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
