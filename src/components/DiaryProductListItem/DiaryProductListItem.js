import { GrClose } from 'react-icons/gr';
// import { useDispatch } from 'react-redux';
import { Product, ProductInfo } from './DiaryProductListItemStyle';
export const DiaryProductListItem = ({product}) => {
    const { title, weight, calories } = product;
    return <Product>
        <ProductInfo>
            <div>{title}</div>
            <div>{weight} г</div>
            <div>{calories} Ккал</div>
        </ProductInfo>
        <button type="button" >
        <GrClose />
        </button>
        
        </Product>
}
// onClick={() => dispatch(deleteProduct(product))}  в button