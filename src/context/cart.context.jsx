import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.util";

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

export const CartContext = createContext({
  setIsCartOpen: () => {},
  addItemToCart: () => {},
  deleteItemFromCart: () => {},
  removeItems: () => {},
});

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

// reducers DON'T manage logic
const cartReducer = (state,  action) => {
  const {type, payload} = action

  switch (type) {
    case 'SET_CART_ITEMS':
      
    return {

      ...state,
      ...payload
    }
      break;

      case 'SET_IS_CART_OPEN':
      
        return {
    
          ...state,
          isCartOpen: payload,
        }
          break;
  
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`)
      break;
  }
}

export const CartProvider = ({ children }) => {

  const [{isCartOpen,cartItems,cartCount,cartTotal}, dispatch] = useReducer(cartReducer, INITIAL_STATE)
  const updateCartItemsReduces = (newCartItems) => {

  const newCartAmount = newCartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  )
  
  const newCartTotal = newCartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )

dispatch(createAction('SET_CART_ITEMS',{cartItems: newCartItems,
  cartTotal: newCartTotal, 
  cartCount: newCartAmount}))
  
 
}

  const addItemToCart = (productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  updateCartItemsReduces(newCartItems)  
};

  const deleteItemFromCart = (productToDelete) => {
    const newCartItems = deleteCartItem(cartItems, productToDelete);
    updateCartItemsReduces(newCartItems)
  };
  const removeItems = (itemToRemove) => {
    const newCartItems = removeItem(cartItems, itemToRemove);
    updateCartItemsReduces(newCartItems)
  };

  const setIsCartOpen = (bool) => {

    dispatch(createAction('SET_IS_CART_OPEN', bool))
      
   
  }
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    deleteItemFromCart,
    removeItems,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
