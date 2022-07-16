import DiaryDateCalendar from 'components/DiaryDateCalendar';
import DiaryAddProductForm from '../../components/DiaryAddProductForm';
import DiaryProductsList from '../../components/DiaryProductsList';

import RightSideBar from 'components/SideBar';
import { useState } from 'react';
import { addProduct } from '../../redux/app/products/productsOperation';
import { getProductsList } from '../../redux/app/products/productsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import Header from 'components/Header';

export default function DiaryPage() {
  const [mobileAddSelected, setMobileAddSelected] = useState(false);
  const productsList = useSelector(getProductsList);
  const dispatch = useDispatch();
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
      <DiaryDateCalendar />
      <DiaryAddProductForm
        onSubmit={formSubmitHandler}
        className={mobileAddSelected ? '' : 'hideOnMobile'}
      />
      <DiaryProductsList products={productsList} />
      <RightSideBar date="16.07.2022" />
    </>
  );
}
