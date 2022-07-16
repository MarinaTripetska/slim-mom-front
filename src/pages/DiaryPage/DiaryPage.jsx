import DiaryDateCalendar from 'components/DiaryDateCalendar';
// import DiaryAddProductForm from '../../components/DiaryAddProductForm';
// import DiaryProductsList from '../../components/DiaryProductsList';

import SideBar from 'components/SideBar';
import { useState } from 'react';
// import { addProduct } from '../../redux/app/products/productsOperation';
// import { getProductsList } from '../../redux/app/products/productsSelectors';
// import { useDispatch } from 'react-redux';
import Header from 'components/Header';
import { diarySelectors } from 'redux/app/diaryPerDay';
import { useSelector } from 'react-redux';
// import { diaryPerDayOperation } from 'redux/app/diaryPerDay';

export default function DiaryPage() {
  const currentDate = useSelector(diarySelectors.getCurrentDate);

  // const [mobileAddSelected, setMobileAddSelected] = useState(false);
  // const productsList = useSelector(diaryPerDayOperation.actionGetProducts());
  // const dispatch = useDispatch();
  // const formSubmitHandler = data => {
  //   const { product, weight } = data;

  //   dispatch(
  //     addProduct({
  //       date: '16.07.2022',
  //       data: { product: product, weightGrm: weight },
  //     }),
  //   );

  //   setMobileAddSelected(false);
  // };
  return (
    <>
      <Header localPage="DiaryPage" />
      <DiaryDateCalendar />
      {/* <DiaryAddProductForm
        onSubmit={formSubmitHandler}
        className={mobileAddSelected ? '' : 'hideOnMobile'}
      /> */}
      {/* <DiaryProductsList products={productsList} /> */}
      <SideBar date={currentDate} />
    </>
  );
}
