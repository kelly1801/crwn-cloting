import { CartIconContainer  } from "./cart-icon.styles.js";
import {useDispatch, useSelector} from "react-redux";
import {selectCartCount,selectIsCartOpen} from "../../store/Cart/cart.selector.js";
import {setIsCartOpen} from "../../store/Cart/cart.action.js";

function CartIcon() {
const dispatch = useDispatch()
const cartCount = useSelector(selectCartCount)
const isCartOpen = useSelector(selectIsCartOpen)
const toggleCart = () => dispatch(setIsCartOpen(!isCartOpen))

  return (
    <CartIconContainer onClick={toggleCart}>
      <img src="/shopping-bag.svg" alt="shopping bag icon" />
      <span>{cartCount}</span>
    </CartIconContainer>
  );
}

export default CartIcon;
