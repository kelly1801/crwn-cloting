import {CartItemContainer, ItemDetails} from './cart-item.styles.js'

function CartItem({cartProduct}) {
  const {name, imageUrl,price, quantity} = cartProduct
    return (
    <CartItemContainer>
        <img src={imageUrl} alt={`${name}`}/>
       <ItemDetails>
<span >{name}</span>
       <span >{quantity} x ${price}</span>
       </ItemDetails>
    
       
    </CartItemContainer>
  )
}

export default CartItem