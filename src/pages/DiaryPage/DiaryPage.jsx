import { BsPlusLg } from 'react-icons/bs';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DiaryDateCalendar from 'components/DiaryDateCalendar';
import DiaryAddProductForm from '../../components/DiaryAddProductForm';
import DiaryProductsList from '../../components/DiaryProductsList';
import MobileSidebar from '../../components/MobileSidebar'
import {AddBtnMobile,PageWrap,SidebarWrap,ListWrap} from './DiaryPageStyle';
import SideBar from 'components/SideBar';
import { addProduct } from '../../redux/app/products/productsOperation';
import {getProductsList} from '../../redux/app/products/productsSelectors';
import Header from 'components/Header';
import Container from 'components/Container';

export default function DiaryPage() {
  const [mobileAddSelected, setMobileAddSelected] = useState(false);
  const productsList = useSelector(getProductsList); 
  const dispatch = useDispatch();
  console.log(productsList)
  
  const formSubmitHandler = data => {
    const { product, weight } = data;

    dispatch(
      addProduct({
        date: '16.07.2022',
        data: { product: product, weightGrm: weight },
      }),
    );
    setMobileAddSelected(false);
  };
  return (

<>
<Header localPage="DiaryPage" />
<PageWrap>
<MobileSidebar
onGoBack={() => setMobileAddSelected(false)}
mobileAddSelected={mobileAddSelected}
/>
  <Container>
    <DiaryDateCalendar />
    <DiaryAddProductForm
      onSubmit={formSubmitHandler}
      className={mobileAddSelected ? '' : 'hideOnMobile'}/>
    <ListWrap className={mobileAddSelected ? 'hideOnMobile' : ''}>
      {<DiaryProductsList products={productsList} />}
    </ListWrap>
      {!mobileAddSelected&&(
        <AddBtnMobile
      className={'showOnMobile'}
      onClick={() => setMobileAddSelected(true)}>
      <BsPlusLg size={14} />
    </AddBtnMobile>)}
  </Container>
  <SidebarWrap className={mobileAddSelected ? 'hideOnMobile' : ''}>
    <SideBar date="16.07.2022" />
  </SidebarWrap>
  </PageWrap>
</>

  //   <>
  //    <Header localPage="DiaryPage" />
  //     <DiaryDateCalendar />
  //     <DiaryAddProductForm
  //       onSubmit={formSubmitHandler}
  //      className={mobileAddSelected ? '' : 'hideOnMobile'}
  //    />
  //    <DiaryProductsList products={productsList} />
  //     <SideBar date="16.07.2022" />
  //  </>

  );
}
