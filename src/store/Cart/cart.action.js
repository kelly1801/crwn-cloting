import { CART_ACTION_TYPES } from "./cart.types.js";
import { createAction } from "../../utils/reducer/reducer.util.ts";

/*UTILITIES FUNCTIONS STARTS*/

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const deleteCartItem = (cartItems, productToDelete) => {
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === productToDelete.id
  );

  if (existingCartItems.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === productToDelete.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

function removeItem(cartItems, itemToRemove) {
  return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
}
/*UTILITIES FUNCTIONS ENDS*/
export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS ,newCartItems);
};

export const deleteItemFromCart = (cartItems, productToDelete) => {
  const newCartItems = deleteCartItem(cartItems, productToDelete);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS ,newCartItems);
};
export const removeItems = (cartItems, itemToRemove) => {
  const newCartItems = removeItem(cartItems, itemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS ,newCartItems);
};
