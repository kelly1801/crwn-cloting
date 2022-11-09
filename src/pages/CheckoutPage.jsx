import {useSelector} from "react-redux";
import {selectCartItems, selectCartTotal} from "../store/Cart/cart.selector.js";
import {CheckoutContainer , CheckoutHeader, HeaderBlock, Total } from '../components/Styles/checkout.styles.js'
import CheckoutItem from '../components/checkout-item/CheckoutItem'
function CheckoutPage() {

const cartTotal= useSelector(selectCartTotal)
    const cartItems = useSelector(selectCartItems)
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
       <Total>Total: $ {cartTotal}</Total>
    </CheckoutContainer>
  )
}

export default CheckoutPage