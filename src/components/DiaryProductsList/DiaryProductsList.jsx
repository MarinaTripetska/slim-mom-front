import { useSelector } from 'react-redux';
import { diarySelectors } from 'redux/app/diaryPerDay';
import DiaryProductListItem from '../DiaryProductListItem';
import { ProductsList, ProductsListThumb } from './DiaryProductsListStyle';

const DiaryProductsList = () => {
  const productsList = useSelector(diarySelectors.getDiaryProducts);
  const isAnyProducts = productsList !== null && productsList.length > 0;

  return !isAnyProducts ? (
    <p>The list of products in your diary is empty on this day</p>
  ) : (
    <ProductsListThumb>
      <ProductsList>
        {productsList.map((product, i) => (
          <DiaryProductListItem key={i} product={product} />
        ))}
      </ProductsList>
    </ProductsListThumb>
  );

  // if (!isAnyProducts) {
  //   return <p>The list of products in your diary is empty on this day</p>;
  // } else {
  //   return (
  //     <ProductsListThumb>
  //       <ProductsList>
  //         {productsList.map((product, i) => (
  //           <DiaryProductListItem key={i} product={product} />
  //         ))}
  //       </ProductsList>
  //     </ProductsListThumb>
  //   );
  // }
};

export default DiaryProductsList;
