import  {DiaryProductListItem}  from "../DiaryProductListItem";
import { ProductsList, ProductsListThumb } from "./DiaryProductsListStyle";
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