import  DiaryProductListItem from "../DiaryProductListItem";
import { ProductsList, ProductsListThumb } from "./DiaryProductsListStyle";
const DiaryProductsList = ({products=[]}) => { 

   return (
   <>
  {(products.length !== 0) ? (<p>List is empty, add products</p>) 
:(
  <ProductsListThumb>
    <ProductsList>
    {products.map( product => <DiaryProductListItem  product={product} /> )} 
    </ProductsList>
    </ProductsListThumb>)
}
    </> 
)
};

export default DiaryProductsList;