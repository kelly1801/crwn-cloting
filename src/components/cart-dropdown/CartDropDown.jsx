import React from "react";
import {
  DropdownContainer,
  CartItemsContainer,
  EmptyMessage
} from "./cart-dropdown.styles.js";
import Button from "../buttons/button";
import CartItem from "../cart-item/CartItem";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { useNavigate } from "react-router-dom";
function CartDropDown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <DropdownContainer>
      <CartItemsContainer>
       
       {
        cartItems.length ?   cartItems.map((item, index) => (
          <CartItem key={index} cartProduct={item} />
        )) : <EmptyMessage>There is no items in your cart</EmptyMessage>
       }
      
      </CartItemsContainer>

      <Button onClick={() => navigate("/checkout")}>Go to checkout</Button>
    </DropdownContainer>
  );
}

export default CartDropDown;
