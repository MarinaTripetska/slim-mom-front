// import { GrClose } from 'react-icons/gr';
// // import { useDispatch } from 'react-redux';
// import { Product, ProductInfo } from './DiaryProductListItemStyle';
// // import { deleteProduct } from '../../redux/app/products/productsOperation';
// export const DiaryProductListItem = ({ product }) => {
//   // const dispatch = useDispatch();
//   const { title, weightGrm, calories } = product;
//   console.log(product);
//   return (
//     <Product>
//       <ProductInfo>
//         <div>{title}</div>
//         <div>{weightGrm} g</div>
//         <div>{calories}kcal</div>
//       </ProductInfo>
//       <button type="button">
//         <GrClose />
//       </button>
//     </Product>
//   );
// };
// // onClick={() => dispatch(deleteProduct(product))}  в button
import { GrClose } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { Product, ProductInfo } from './DiaryProductListItemStyle';
import { diaryPerDayOperation } from '../../redux/app/diaryPerDay';
import { diarySelectors } from '../../redux/app/diaryPerDay/';

export const DiaryProductListItem = ({ product }) => {
  const { weightGrm, _id } = product;

  const dispatch = useDispatch();
  const date = useSelector(diarySelectors.getCurrentDate);

  const payload = {
    productId: _id,
    date: date,
  };

  return (
    <Product>
      <ProductInfo>
        <div>{product.product.title.ua}</div>
        <div>{weightGrm} g</div>
        <div>{product.product.calories}kcal</div>
      </ProductInfo>
      <button
        type="button"
        onClick={() =>
          dispatch(diaryPerDayOperation.actionDeleteProduct(payload))
        }
      >
        <GrClose />
      </button>
    </Product>
  );
};
