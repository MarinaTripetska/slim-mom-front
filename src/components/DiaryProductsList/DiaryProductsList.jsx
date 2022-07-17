import DiaryProductListItem from '../DiaryProductListItem';
import { ProductsList, ProductsListThumb } from './DiaryProductsListStyle';

const DiaryProductsList = ({ products = [] }) => {
  const check = ['', '', '', '', ''];

  return check.length === 0 ? (
    <p>List is empty, add products</p>
  ) : (
    <ProductsListThumb>
      <ProductsList>
        {check.map((product, i) => (
          <DiaryProductListItem key={i} product={product} />
        ))}
      </ProductsList>
    </ProductsListThumb>
  );
};

export default DiaryProductsList;
