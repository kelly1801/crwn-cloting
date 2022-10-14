import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {

  const existingCartItems = cartItems.find(cartItem => cartItem.id === productToAdd.id)

  
if (existingCartItems) {
  return cartItems.map(cartItem => cartItem.id === productToAdd.id?
    {...cartItem, quantity: cartItem.quantity + 1}:
    cartItem
    )
}

return [...cartItems, {...productToAdd, quantity: 1}]
}

const deleteCartItem = (cartItems , productToDelete) => {

  const existingCartItems = cartItems.find(cartItem => cartItem.id === productToDelete.id)

  
if (existingCartItems.quantity === 1) {
  return cartItems.filter(cartItem => cartItem.id !== productToDelete.id )
    
 }
 return cartItems.map(cartItem => cartItem.id === productToDelete.id?
  {...cartItem, quantity: cartItem.quantity - 1}:
  cartItem
  )

}

function removeItem(cartItems, itemToRemove) {
  return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id )
}


export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  deleteItemFromCart: () => {},
  removeItems: () => {},
  cartTotal: 0

});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([])
const [cartCount, setCartCount] = useState(0)
const [cartTotal, setCartTotal] = useState(0)


useEffect(()=>{
  
  const newCartAmount = cartItems.reduce((total, cartItem)=> total + cartItem.quantity, 0)
  setCartCount(newCartAmount)
  }, [cartItems])

  useEffect(()=>{
  
    const newCartTotal = cartItems.reduce((total, cartItem)=> total + cartItem.quantity * cartItem.price, 0)
    setCartTotal(newCartTotal)
    }, [cartItems])


  const addItemToCart = (productToAdd) => {
   setCartItems(addCartItem(cartItems, productToAdd))
  }

  const deleteItemFromCart = (productToDelete) => {
    setCartItems(deleteCartItem(cartItems, productToDelete))
   }
   const removeItems = (itemToRemove) => {
    setCartItems(removeItem(cartItems, itemToRemove))
   }



  const value  = { isCartOpen, setIsCartOpen, addItemToCart, cartItems ,  cartCount, deleteItemFromCart, removeItems, cartTotal};
  
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
