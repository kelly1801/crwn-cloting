import { ProductCardContainer, Footer, Span} from "./product-card.styles.js";
import Button, {buttonTypeClasses} from "../buttons/button";
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart} from "../../store/Cart/cart.action.js";
import {selectCartItems} from "../../store/Cart/cart.selector.js";

function ProductCard({ product }) {
const {name, price, imageUrl} = product
const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const addProductToCart = ()=> dispatch(addItemToCart(cartItems ,product))

return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`}/>
     
      <Footer >
        <Span name>{name}</Span>
      <Span price>{price}</Span>
      </Footer>
     
      <Button 
      buttonType={buttonTypeClasses.inverted}
      onClick={addProductToCart}
      >Add to cart</Button>
    </ProductCardContainer>
  );
}

export default ProductCard;
