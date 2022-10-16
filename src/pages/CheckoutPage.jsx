import {useContext} from 'react'
import { CartContext } from '../context/cart.context'
import {CheckoutContainer , CheckoutHeader, HeaderBlock, Total } from '../components/Styles/checkout.styles.js'
import CheckoutItem from '../components/checkout-item/CheckoutItem'
function CheckoutPage() {
const {cartItems, cartTotal} = useContext(CartContext)
    return (
    <CheckoutContainer>
       
       <CheckoutHeader>

<HeaderBlock>
    <span>Product</span>
</HeaderBlock>
<HeaderBlock>
<span>Description</span>
</HeaderBlock>
<HeaderBlock>
<span>Quantity</span>
</HeaderBlock>
<HeaderBlock>
<span>Price</span>
</HeaderBlock>
<HeaderBlock>
<span>Product</span>
</HeaderBlock>
       </CheckoutHeader>
       { cartItems.map(item => <CheckoutItem key={item.id} cartItem={item}/>)}
       <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  )
}

export default CheckoutPage