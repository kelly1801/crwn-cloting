import "./cart-icon.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
function CartIcon() {

  const {isCartOpen , setIsCartOpen} = useContext(CartContext)
  
const toggleCart = () => {setIsCartOpen(!isCartOpen)}
  
  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <img className="shopping-icon" src="/shopping-bag.svg" alt="shopping bag icon" />
      <span className="item-count">0</span>
    </div>
  );
}

export default CartIcon;
