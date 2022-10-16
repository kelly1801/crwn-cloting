import  { CheckoutItemContainer, ImageContainer ,  Item, Arrow, RemoveButton }from './checkout-item.styles.js'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

function CheckoutItem({cartItem}) {

    const {removeItems,addItemToCart, deleteItemFromCart} = useContext(CartContext)
    const {name, imageUrl, price, quantity} = cartItem
    return (
  
<CheckoutItemContainer>
    <ImageContainer>
        <img src={imageUrl} alt={name} /> 
        </ImageContainer>
        <Item>{name}</Item>
        <Item quantity>
            <Arrow onClick={() => deleteItemFromCart(cartItem)}>&#10094;</Arrow>
            <span> {quantity}</span>
           
            <Arrow onClick={() => addItemToCart(cartItem)}>&#10095;</Arrow>
            </Item>
        <span className='price'>{quantity * price}</span>
        <RemoveButton onClick={() => removeItems(cartItem)}> &#10005;</RemoveButton>
</CheckoutItemContainer>
  )
}

export default CheckoutItem