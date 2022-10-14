import './checkout-item.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

function CheckoutItem({cartItem}) {

    const {removeItems,addItemToCart, deleteItemFromCart} = useContext(CartContext)
    const {name, imageUrl, price, quantity} = cartItem
    return (
  
<div className='checkout-item-container'>
    <figure className='image-container'>
        <img src={imageUrl} alt={name} /> 
        </figure>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => deleteItemFromCart(cartItem)}>&#10094;</div>
            <span className='value'> {quantity}</span>
           
            <div className='arrow'onClick={() => addItemToCart(cartItem)}>&#10095;</div>
            </span>
        <span className='price'>{quantity * price}</span>
        <div className='remove-button' onClick={() => removeItems(cartItem)}> &#10005;</div>
</div>
  )
}

export default CheckoutItem