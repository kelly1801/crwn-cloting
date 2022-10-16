import { ProductCardContainer, Footer, Span} from "./product-card.styles.js";
import Button, {buttonTypeClasses} from "../buttons/button";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";


function ProductCard({ product }) {
const {name, price, imageUrl} = product
const {addItemToCart} = useContext(CartContext)


function addOnClick() {
  addItemToCart(product)
}
return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`}/>
     
      <Footer >
        <Span name>{name}</Span>
      <Span price>{price}</Span>
      </Footer>
     
      <Button 
      buttonType={buttonTypeClasses.inverted}
      onClick={addOnClick}
      >Add to cart</Button>
    </ProductCardContainer>
  );
}

export default ProductCard;
