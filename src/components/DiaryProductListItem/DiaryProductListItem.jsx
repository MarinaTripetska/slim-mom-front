import { GrClose } from 'react-icons/gr';
// import { useDispatch } from 'react-redux';
import { Product, ProductInfo } from './DiaryProductListItemStyle';
// import { deleteProduct } from '../../redux/app/products/productsOperation';
export const DiaryProductListItem = ({ product }) => {
  // const dispatch = useDispatch();
  const { title, weightGrm, calories } = product;
  // console.log(product)
  return (
    <Product>
      <ProductInfo>
        <div>{title}</div>
        <div>{weightGrm} g</div>
        <div>{calories}kcal</div>
      </ProductInfo>
      <button type="button">
        <GrClose />
      </button>
    </Product>
  );
};
// onClick={() => dispatch(deleteProduct(product))}  в button
