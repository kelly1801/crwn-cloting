import {useContext} from 'react'
import { CartContext } from '../context/cart.context'
import '../components/Styles/checkout.styles.scss'
import CheckoutItem from '../components/checkout-item/CheckoutItem'
function CheckoutPage() {
const {cartItems, cartTotal} = useContext(CartContext)
    return (
    <div className='checkout-container'>
       
       <div className='checkout-header'>

<div className="header-block">
    <span>Product</span>
</div>
<div className="header-block">
<span>Description</span>
</div>
<div className="header-block">
<span>Quantity</span>
</div>
<div className="header-block">
<span>Price</span>
</div>
<div className="header-block">
<span>Product</span>
</div>
       </div>
       { cartItems.map(item => <CheckoutItem key={item.id} cartItem={item}/>)}
       <span className='total'>Total: ${cartTotal}</span>
    </div>
  )
}

export default CheckoutPage