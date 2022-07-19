import { useSelector } from 'react-redux';
import { diarySelectors } from 'redux/app/diaryPerDay';
import DiaryProductListItem from '../DiaryProductListItem';
import { ProductsList, ProductsListThumb } from './DiaryProductsListStyle';

const DiaryProductsList = () => {
  const productsList = useSelector(diarySelectors.getDiaryProducts);
  const isAnyProducts = productsList !== null && productsList.length > 0;

  return !isAnyProducts ? (
    <p>Список продуктів у вашому щоденнику в цей день порожній</p>
  ) : (
    <ProductsListThumb>
      <ProductsList>
        {productsList.map((product, i) => (
          <DiaryProductListItem key={i} product={product} />
        ))}
      </ProductsList>
    </ProductsListThumb>
  );
};

export default DiaryProductsList;
