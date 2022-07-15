import DatePicker from '../../components/DatePicker';
import DiaryAddProductForm from '../../components/DiaryAddProductForm';
import DiaryProductsList from '../../components/DiaryProductsList';
import { PageWrapper } from './DiaryPageStyle';
import RightSideBar from 'components/RightSideBar';

import {useState, useEffect } from 'react';
import {addProduct} from '../../redux/app/products/productsOperation';
import {getProductsList} from '../../redux/app/products/productsSelectors';
import { useDispatch, useSelector } from 'react-redux';

export default function DiaryPage() {
  const [mobileAddSelected, setMobileAddSelected] = useState(false);
  const productsList = useSelector(getProductsList);
  const dispatch = useDispatch();
  const formSubmitHandler = data => {
    const { product, weight } = data;
    console.log(data)
    dispatch(
      addProduct({
        meal: { title: product, weightGrm: weight },
      })
    );
    console.log(productsList)
    setMobileAddSelected(false);
  };
  return (
    <PageWrapper>
      <DatePicker />
      <DiaryAddProductForm  onSubmit={formSubmitHandler}
        className={mobileAddSelected ? '' : 'hideOnMobile'} />
        <DiaryProductsList products={productsList}/>
     <RightSideBar/>
    </PageWrapper>
  );
}
