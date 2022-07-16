import  DiaryProductListItem from "../DiaryProductListItem";
import { ProductsList, ProductsListThumb } from "./DiaryProductsListStyle";
const DiaryProductsList = ({products=[]}) => {
console.log(products)
   return (
   <>
     {products.length > 0 && (
    <ProductsListThumb>
        <ProductsList>
        {products.map( product => (<DiaryProductListItem  product={product} /> ))} 
        </ProductsList>
    </ProductsListThumb>)}
   </>
)
};

export default DiaryProductsList;