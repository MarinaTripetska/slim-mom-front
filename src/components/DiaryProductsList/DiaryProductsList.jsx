import  {DiaryProductListItem}  from "../DiaryProductListItem/DiaryProductListItem";
import { ProductsList, ProductsListThumb } from "../DiaryProductsList/DiaryProductsListStyle";
const DiaryProductsList = ({ products=[] }) => {
    
   return (
   <>
     {products.length !== 0 && <ProductsListThumb>
        <ProductsList>
            {products.map( product => (<DiaryProductListItem key={product._id} product={product} /> ))} 
        </ProductsList>
    </ProductsListThumb>}
   </>
)
};

export default DiaryProductsList;