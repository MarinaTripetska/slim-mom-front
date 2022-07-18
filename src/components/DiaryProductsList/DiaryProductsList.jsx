import { useSelector } from 'react-redux';
import { diarySelectors } from 'redux/app/diaryPerDay';
import DiaryProductListItem from '../DiaryProductListItem';
import { ProductsList, ProductsListThumb } from './DiaryProductsListStyle';

const DiaryProductsList = () => {
  const productsList = useSelector(diarySelectors.getDiaryProducts);
  const isAnyProducts = productsList !== null && productsList.length > 0;

  if (!isAnyProducts) {
    return <p>Список продуктів у вашому щоденнику порожній</p>;
  }

  <ProductsListThumb>
    <ProductsList>
      {productsList.map((product, i) => (
        <DiaryProductListItem key={i} product={product} />
      ))}
    </ProductsList>
  </ProductsListThumb>;
};

export default DiaryProductsList;
