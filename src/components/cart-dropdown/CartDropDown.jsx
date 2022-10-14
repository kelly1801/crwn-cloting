import React from "react";
import "./cart-dropdown.styles.scss";
import Button from "../buttons/button";
import CartItem from "../cart-item/CartItem"
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { useNavigate } from "react-router-dom";
function CartDropDown() {
  const { cartItems } = useContext(CartContext)
const navigate = useNavigate()
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
{ cartItems.map((item, index )=> <CartItem key={index} cartProduct={item}/>)}
       
       
      
      </div>
   
      <Button onClick={() => navigate("/checkout")}>Go to checkout</Button>
     
    </div>
  );
}

export default CartDropDown;
