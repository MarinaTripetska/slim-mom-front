import { useSelector } from 'react-redux';

import { diarySelectors } from 'redux/app/diaryPerDay';

import { DiaryProductListItem } from 'components/DiaryProductListItem';

import {
  AlternativeText,
  ProductsList,
  ProductsListThumb,
} from './DiaryProductsList.styled';

export const DiaryProductsList = () => {
  const productsList = useSelector(diarySelectors.getDiaryProducts);
  const isAnyProducts = productsList !== null && productsList.length > 0;

  return !isAnyProducts ? (
    <AlternativeText>
      Список продуктів у вашому щоденнику порожній
    </AlternativeText>
  ) : (
    <ProductsListThumb>
      <ProductsList>
        {[...productsList].reverse().map((product, i) => (
          <DiaryProductListItem key={i} product={product} />
        ))}
      </ProductsList>
    </ProductsListThumb>
  );
};
