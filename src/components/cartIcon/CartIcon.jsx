import { CartIconContainer  } from "./cart-icon.styles.js";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
function CartIcon() {

  const {isCartOpen , setIsCartOpen, cartCount} = useContext(CartContext)
  
const toggleCart = () => {setIsCartOpen(!isCartOpen)}
  
  return (
    <CartIconContainer onClick={toggleCart}>
      <img src="/shopping-bag.svg" alt="shopping bag icon" />
      <span>{cartCount}</span>
    </CartIconContainer>
  );
}

export default CartIcon;
