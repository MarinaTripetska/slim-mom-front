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
  P,
  LoaderPosition,
} from './DiaryPageStyle';
import SideBar from 'components/SideBar';
import { diaryPerDayOperation } from 'redux/app/diaryPerDay';
import Header from 'components/Header';
// import Loader from 'components/Loader';
import { Rings } from 'react-loader-spinner';

export default function DiaryPage() {
  const dispatch = useDispatch();

  const isLoading = useSelector(diarySelectors.getIsLoading);
  const currentDate = new Date().toLocaleDateString();
  const [mobileAddSelected, setMobileAddSelected] = useState(false);
  const date = useSelector(diarySelectors.getCurrentDate);

  useEffect(() => {
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

          {isLoading ? (
            <LoaderPosition>
              <Rings color="#FC842D" height={50} width={50} />
            </LoaderPosition>
          ) : (
            <div>
              {date === currentDate ? (
                <DiaryAddProductForm
                  onSubmit={formSubmitHandler}
                  className={mobileAddSelected ? '' : 'hideOnMobile'}
                />
              ) : (
                <P>Продукти якi ви з'їли в цей день</P>
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
            </div>
          )}
        </ContainerDiary>
        <SidebarWrap className={mobileAddSelected ? 'hideOnMobile' : ''}>
          <SideBar date={currentDate} />
        </SidebarWrap>
      </PageWrap>
    </>
  );
}
