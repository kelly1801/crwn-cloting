import {useContext} from "react";
import { ProductContext } from "../context/products.context";
import ProductCard from "../components/product-card/product-card";
import '../components/Styles/shop.styles.scss'
function Shop() {
  
const {products} = useContext(ProductContext)
  return (
    <div className="products-container">
   
     {
    products.map((product, index) => <ProductCard product={product} key={index}/>)
     }
       
    </div>
  );
}

export default Shop;
