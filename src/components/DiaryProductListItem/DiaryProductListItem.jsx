import { GrClose } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { Product, ProductInfo } from './DiaryProductListItem.styled';
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
        <div>{weightGrm} грам</div>
        <div>{product.product.calories}кКал</div>
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
