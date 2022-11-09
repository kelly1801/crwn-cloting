import React from "react";
import {useSelector} from "react-redux";
import {selectCartItems} from "../../store/Cart/cart.selector.js";
import {
  DropdownContainer,
  CartItemsContainer,
  EmptyMessage
} from "./cart-dropdown.styles.js";
import Button from "../buttons/button";
import CartItem from "../cart-item/CartItem";

import { useNavigate } from "react-router-dom";
function CartDropDown() {
    const navigate = useNavigate();
const cartItems = useSelector(selectCartItems)
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
